
import {internal} from "../internal/internal";
import * as http from 'http';
import {QueryResponse} from './response';
import {PilosaError} from './error';
import {Database, Frame, PqlQuery, TimeQuantum} from './orm';

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
    }

    query(query: PqlQuery, queryOptions?: QueryOptions): Promise<QueryResponse> {
        const request = new QueryRequest(query.database, query.serialize(), queryOptions);
        return this.queryPath(request);
    }

    createDatabase(database: Database): Promise<void> {
        const data = this.encodeRequestData({
            db: database.name,
            options: {
                columnLabel: database.columnLabel
            }
        });
        return new Promise<void>((resolve, reject) => {
            this.httpRequest("POST", "/db", data).then(_ => {
                if (database.timeQuantum.equals(TimeQuantum.NONE)) {
                    resolve();
                }
                else {
                    this.patchDatabaseTimeQuantum(database)
                        .then(resolve)
                        .catch(reject);
                }
            }).catch(reject);
        });
    }

    createFrame(frame: Frame): Promise<void> {
        const data = this.encodeRequestData({
            db: frame.database.name,
            frame: frame.name,
            options: {
                rowLabel: frame.rowLabel
            }
        });
        return new Promise<void>((resolve, reject) => {
            this.httpRequest("POST", "/frame", data).then(_ => {
                if (frame.timeQuantum.equals(TimeQuantum.NONE)) {
                    resolve();
                }
                else {
                    this.patchFrameTimeQuantum(frame)
                        .then(resolve)
                        .catch(reject);
                }
            }).catch(reject);
        });

    }

    ensureDatabase(database: Database): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.createDatabase(database).
                then(resolve).
                catch(err => {
                    if (PilosaError.equals(err, PilosaError.DATABASE_EXISTS)) {
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

    deleteDatabase(database: Database): Promise<void> {
        const data = this.encodeRequestData({db: database.name});
        return new Promise<void>((resolve, reject) => {
            this.httpRequest("DELETE", "/db", data)
                .then(_ => resolve())
                .catch(reject);
        });
    }

    deleteFrame(frame: Frame): Promise<void> {
        const data = this.encodeRequestData({
            db: frame.database.name,
            frame: frame.name
        });
        return new Promise<void>((resolve, reject) => {
            this.httpRequest("DELETE", "/frame", data)
                .then(_ => resolve())
                .catch(reject);
        });
    }

    private patchDatabaseTimeQuantum(database: Database): Promise<void> {
        const data = this.encodeRequestData({db: database.name,
                time_quantum: database.timeQuantum.toString()});
        return new Promise<void>((resolve, reject) => {
            this.httpRequest("PATCH", "/db/time_quantum", data)
                .then(_ => resolve())
                .catch(reject);
        });
    }

    private patchFrameTimeQuantum(frame: Frame): Promise<void> {
        const data = this.encodeRequestData({
            db: frame.database.name,
            frame: frame.name,
            time_quantum: frame.timeQuantum.toString()
        });
        return new Promise<void>((resolve, reject) => {
            this.httpRequest("PATCH", "/frame/time_quantum", data)
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
            this.httpRequest("POST", "/query", data, headers, true).then(r => {
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
                            case "database already exists\n":
                                return reject(PilosaError.DATABASE_EXISTS);
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
        if (scheme != "http") {
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
    constructor(private database: Database, private query?: string,
            private options?: QueryOptions) {}

    toProtoBuf() {
        const request = new internal.QueryRequest();
        request.DB = this.database.name;
        request.Query = this.query;
        request.Profiles = (this.options && this.options.profiles === true)? true : false;
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
    profiles: boolean;
}