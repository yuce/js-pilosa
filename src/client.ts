/*
Copyright 2017 Yuce Tekol

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

1. Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright
notice, this list of conditions and the following disclaimer in the
documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
contributors may be used to endorse or promote products derived
from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
DAMAGE.
*/

import {internal} from "../internal/internal";
import * as http from 'http';
import {QueryResponse} from './response';
import {PilosaError} from './error';
import {Index, Frame, PqlQuery, TimeQuantum} from './orm';

export type HttpMethod = "POST" | "DELETE" | "GET" | "PATCH";

export class Client {
    private currentHost: URI | null = null;
    private cluster: Cluster;

    constructor(clusterUriString?: Cluster | URI | string) {
        if (clusterUriString) {
            if (clusterUriString instanceof Cluster) {
                this.cluster = clusterUriString
            }
            else if (clusterUriString instanceof URI) {
                this.cluster = new Cluster(clusterUriString);
            }
            else if (typeof clusterUriString === "string") {
                this.cluster = new Cluster(URI.address(clusterUriString));
            }
        }
        else {
            this.cluster = new Cluster(new URI());
        }
    }

    query(query: PqlQuery, queryOptions?: QueryOptions): Promise<QueryResponse> {
        const request = new QueryRequest(query.index, query.serialize(), queryOptions);
        return this.queryPath(request);
    }

    createIndex(index: Index): Promise<void> {
        const data = this.encodeRequestData({
            options: {
                columnLabel: index.columnLabel
            }
        });
        return new Promise<void>((resolve, reject) => {
            this.httpRequest("POST", `/index/${index.name}`, data).then(_ => {
                if (index.timeQuantum.equals(TimeQuantum.NONE)) {
                    resolve();
                }
                else {
                    this.patchIndexTimeQuantum(index)
                        .then(resolve)
                        .catch(reject);
                }
            }).catch(reject);
        });
    }

    createFrame(frame: Frame): Promise<void> {
        const data = this.encodeRequestData(frame.optionsForRequest);
        return new Promise<void>((resolve, reject) => {
            this.httpRequest("POST", `/index/${frame.index.name}/frame/${frame.name}`, data)
                .then(_ => resolve())
                .catch(reject);
        });
    }

    ensureIndex(index: Index): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.createIndex(index).
                then(resolve).
                catch(err => {
                    if (PilosaError.equals(err, PilosaError.INDEX_EXISTS)) {
                        resolve();
                    }
                    else {
                        reject(err);
                    }
                });
        });
    }

    ensureFrame(frame: Frame): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.createFrame(frame).
                then(resolve).
                catch(err => {
                    if (PilosaError.equals(err, PilosaError.FRAME_EXISTS)) {
                        resolve();
                    }
                    else {
                        reject(err);
                    }
                });
        });
    }

    deleteIndex(index: Index): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.httpRequest("DELETE", `/index/${index.name}`)
                .then(_ => resolve())
                .catch(reject);
        });
    }

    deleteFrame(frame: Frame): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.httpRequest("DELETE", `/index/${frame.index.name}/frame/${frame.name}`)
                .then(_ => resolve())
                .catch(reject);
        });
    }

    private patchIndexTimeQuantum(index: Index): Promise<void> {
        const data = this.encodeRequestData({
            timeQuantum: index.timeQuantum.toString()
        });
        return new Promise<void>((resolve, reject) => {
            this.httpRequest("PATCH", `/index/${index.name}/time-quantum`, data)
                .then(_ => resolve())
                .catch(reject);
        });
    }

    private queryPath(request: QueryRequest): Promise<QueryResponse> {
        const data = request.toProtoBuf();
        return new Promise<QueryResponse>((resolve, reject) => {
            const headers = {
                "Content-Type": "application/x-protobuf",
                "Accept": "application/x-protobuf"
            }
            this.httpRequest("POST", `/index/${request.index.name}/query`, data, headers, true).then(r => {
                try {
                    resolve(QueryResponse.fromProtobuf(r))
                }
                catch (err) {
                    reject(err);
                }
            }).catch(reject);
        });
    }

    private encodeRequestData(data: any): Buffer {
        return new Buffer(JSON.stringify(data));
    }

    protected httpRequest(method: HttpMethod, path: string, data?: Uint8Array,
            headers?: any, needsResult?: boolean): Promise<Buffer> {
        const address = this.getAddress();
        const options: http.RequestOptions = {
            host: address.host,
            port: address.port,
            path: path,
            method: method
        }
        headers = headers || {};
        headers["Content-Length"] = data? data.length : 0;
        options.headers = headers;

        const chunks = new Array<Buffer>();
        let dataSize = 0;
        return new Promise<Buffer|null>((resolve, reject) => {
            const req = http.request(options, res => {
                if (res && res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
                    if (needsResult) {
                        res.on('data', chunk => {
                            chunks.push(chunk as Buffer);
                            dataSize += chunk.length;
                        });
                        res.on('end', () => resolve(Buffer.concat(chunks, dataSize)));
                    }
                    else {
                        return resolve(null);
                    }

                }
                else {
                    res.on('data', chunk => {
                        chunks.push(chunk as Buffer);
                        dataSize += chunk.length;
                    });
                    res.on('end', () => {
                        let msg = Buffer.concat(chunks, dataSize).toString();
                        switch (msg) {
                            case "index already exists\n":
                                return reject(PilosaError.INDEX_EXISTS);
                            case "frame already exists\n":
                                return reject(PilosaError.FRAME_EXISTS);
                            default:
                                return reject(PilosaError.generic(`Server error (${res.statusCode}) ${res.statusMessage}: ${msg}`));
                        }
                    });
                }
            });

            req.on('error', err => {
                if (this.currentHost) {
                    this.cluster.removeHost(this.currentHost);
                    this.currentHost = null;
                }
                reject(err);
            });

            if (data) {
                req.write(data);
            }
            req.end();
        });
    }

    private getAddress(): URI {
        if (this.currentHost === null) {
            this.currentHost = this.cluster.getHost();
        }
        const scheme = this.currentHost.scheme;
        if (scheme != "http" && scheme != "https") {
            throw PilosaError.generic("Unknown scheme: " + scheme);
        }
        return this.currentHost;
    }
}

export class Cluster {
    private _hosts: URI[];
    private _nextIndex = 0;

    constructor(...hosts: URI[]) {
        this._hosts = hosts;
    }

    addHost(host: URI): void {
        this._hosts.push(host);
    }

    getHost(): URI {
        if (this._hosts.length == 0) {
            throw PilosaError.generic("There are no available hosts");
        }
        const nextHost = this._hosts[this._nextIndex % this._hosts.length];
        this._nextIndex = (this._nextIndex + 1) % this._hosts.length;
        return nextHost;
    }

    removeHost(host: URI): void {
        const count = this._hosts.length;
        for (let i = 0; i < count; i++) {
            if (this._hosts[i].equals(host)) {
                this._hosts.splice(i, 1);
                break;
            }
        }
    }

    get hosts(): URI[] {
        return this._hosts;
    }
}

class QueryRequest {
    constructor(readonly index: Index, private query: string,
            private options?: QueryOptions) {}

    toProtoBuf() {
        const request = new internal.QueryRequest();
        request.Query = this.query;
        request.ColumnAttrs = (this.options && this.options.columns === true)? true : false;
        return internal.QueryRequest.encode(request).finish();
    }
}

export class URI {
    readonly scheme: string = "http";
    readonly host: string = "localhost";
    readonly port: number = 10101;

    constructor(parts?: {scheme?: string, host?: string, port?: number}) {
        this.scheme = (parts && parts.scheme) || "http";
        this.host = (parts && parts.host) || "localhost";
        this.port = (parts && parts.port) || 10101;
    }

    static address(address: string): URI {
        return URI.parseAddress(address);
    }

    toString(): string {
        return `${this.scheme}://${this.host}:${this.port}`;
    }

    equals(other: URI): boolean {
        return this.scheme == other.scheme &&
            this.host == other.host &&
            this.port == other.port;
    }

    private static parseAddress(address: string): URI {
        if (address == "") {
            throw PilosaError.uri("Not a Pilosa URI");
        }
        let m = URI._uriPattern.exec(address);
        if (m) {
            const scheme = m[2];
            const host = m[3];
            const port = (m[5] !== undefined)? parseInt(m[5]) : undefined;
            return new URI({scheme: scheme, host: host, port: port});
        }
        throw PilosaError.uri("Not a Pilosa URI");
    }

    private static _uriPattern: RegExp = /^(([+a-z]+):\/\/)?([0-9a-z.-]+)?(:([0-9]+))?$/;
}

export interface QueryOptions {
    columns: boolean;
}