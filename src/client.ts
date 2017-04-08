
import {internal} from "../internal/internal";
import * as http from 'http';
import {QueryResponse} from './response';
import {PilosaError} from './error';
import {Database, Frame, PqlQuery} from './orm';

export type HttpMethod = "POST" | "DELETE" | "GET" | "PATCH";

export class Client {
    private currentHost: URI | null = null;

    protected constructor(private _cluster: ICluster) {}

    static defaultClient(): Client {
        return Client.withAddress(":10101");
    }

    static withAddress(address: string | URI): Client {
        let uri: URI = (typeof address === "string")? URI.address(address) : address;
        return new Client(Cluster.withHost(uri));
    }

    static withCluster(cluster: ICluster): Client {
        return new Client(cluster);
    }

    query(query: PqlQuery): Promise<QueryResponse> {
        const request = QueryRequest.withDatabase(query.database);
        request.query = query.serialize();
        return this.queryPath(request);
    }

    createDatabase(database: Database): Promise<void> {
        const data = this.encodeRequestData({
            db: database.name,
            options: {
                columnLabel: database.columnLabel
            }
        });
        return this.createOrDeleteDatabase("POST", data);
    }

    createFrame(frame: Frame): Promise<void> {
        const data = this.encodeRequestData({
            db: frame.database.name,
            frame: frame.name,
            options: {
                rowLabel: frame.rowLabel
            }
        });
        return this.createOrDeleteFrame("POST", data);
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
        return this.createOrDeleteDatabase("DELETE", data);
    }

    private createOrDeleteDatabase(method: HttpMethod, data: Buffer): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.httpRequest(method, "/db", data).
                then(_ => resolve()).
                catch(reject);
        });
    }

    private createOrDeleteFrame(method: HttpMethod, data: Buffer): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.httpRequest(method, "/frame", data).
                then(_ => resolve()).
                catch(reject);
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
                    this._cluster.removeHost(this.currentHost);
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
            this.currentHost = this._cluster.getHost();
        }
        const scheme = this.currentHost.scheme;
        if (scheme != "http") {
            throw PilosaError.generic("Unknown scheme: " + scheme);
        }
        return this.currentHost;
    }
}

export interface ICluster {
    getHost(): URI;
    removeHost(address: URI): void;
}

export class Cluster implements ICluster {
    private _hosts: Array<URI>;
    private _nextIndex = 0;

    constructor() {
        this._hosts = new Array<URI>();
    }

    static withHost(host: URI): Cluster {
        const cluster = new Cluster();
        cluster.addHost(host);
        return cluster;
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

    getHosts(): Array<URI> {
        return this._hosts;
    }
}

class QueryRequest {
    private constructor(private _database: Database, private _query?: string) {}

    static withDatabase(database: Database) {
        return new QueryRequest(database);
    }

    set query(q: string) {
        this._query = q;
    }

    toProtoBuf() {
        const request = new internal.QueryRequest();
        request.DB = this._database.name;
        request.Query = this._query;
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
