
import {internal} from './internal';
import * as http from 'http';
import {QueryResponse, QueryResult} from './response';
import {PilosaError} from './error';
import {Validator} from "./validator";
import {DatabaseOptions, FrameOptions} from "./options";

type HttpMethod = "POST" | "DELETE" | "GET";

export class Client {
    private _currentAddress: URI;

    private constructor(private _cluster: ICluster) {}

    static defaultClient(): Client {
        return Client.withAddress(":15000");
    }

    static withAddress(address: string | URI): Client {
        let uri: URI = (typeof address === "string")? URI.fromAddress(address) : address;
        return new Client(Cluster.withAddress(uri));
    }

    static withCluster(cluster: ICluster): Client {
        return new Client(cluster);
    }

    query(database: string, query: string): Promise<QueryResponse> {
        const request = QueryRequest.withDatabase(database);
        request.query = query;
        return this.queryPath(request);
    }

    createDatabase(name: string, options?: DatabaseOptions): Promise<void> {
        Validator.ensureValidDatabaseName(name);
        options = options || DatabaseOptions.withDefaults();
        const data = this.encodeRequestData({
            db: name,
            options: {
                columnLabel: options.columnLabel
            }
        });
        return new Promise<void>((resolve, reject) => {
            this.httpRequest("POST", "/db", data).
                then(res => resolve()).
                catch(reject);
        });
    }

    createFrame(databaseName: string, name: string, options?: FrameOptions): Promise<void> {
        Validator.ensureValidFrameName(name);
        options = options || FrameOptions.withDefaults();
        const data = this.encodeRequestData({
            db: databaseName,
            frame: name,
            options: {
                rowLabel: options.rowLabel
            }
        });
        return new Promise<void>((resolve, reject) => {
            this.httpRequest("POST", "/frame", data).
                then(res => resolve()).
                catch(reject);
        });
    }

    ensureDatabaseExists(name: string, options?: DatabaseOptions): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.createDatabase(name, options).
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

    ensureFrameExists(databaseName: string, name: string, options?: FrameOptions): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.createFrame(databaseName, name, options).
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

    deleteDatabase(name: string): Promise<void> {
        Validator.ensureValidDatabaseName(name);
        const data = this.encodeRequestData({db: name});
        return new Promise<void>((resolve, reject) => {
            this.httpRequest("DELETE", "/db", data).
                then(res => resolve()).
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
            this.httpRequest("POST", "/query", data, headers, true).
                then(response => {
                    let qr: QueryResponse = null;
                    try {
                        qr = QueryResponse.fromProtobuf(response);
                    }
                    catch (err) {
                        reject(err);
                    }
                    resolve(qr);                
                }).
                catch(reject);
        });
    }

    private encodeRequestData(data: any): Buffer {
        return new Buffer(JSON.stringify(data));
    }

    private httpRequest(method: HttpMethod, path: string, data?: Uint8Array,
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
        return new Promise<Buffer>((resolve, reject) => {
            const req = http.request(options, res => {
                if (res.statusCode < 200 || res.statusCode >= 300) {
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
                else {
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
            });

            req.on('error', err => reject(err));

            if (data) {
                req.write(data);
            }
            req.end();
        });
    }

    private getAddress(): URI {
        this._currentAddress = this._cluster.getAddress();
        const scheme = this._currentAddress.scheme;
        if (scheme != "http") {
            throw PilosaError.generic("Unknown scheme: " + scheme);
        }
        return this._currentAddress;
    }
}

export interface ICluster {
    getAddress(): URI;
    removeAddress(address: URI): void;
}

export class Cluster implements ICluster {
    private _addresses: Array<URI>;
    private _nextIndex = 0;
    
    constructor() {
        this._addresses = new Array<URI>();
    }

    static withAddress(address: URI): Cluster {
        const cluster = new Cluster();
        cluster.addAddress(address);
        return cluster;
    }

    addAddress(address: URI): void {
        this._addresses.push(address);
    }

    getAddress(): URI {        
        if (this._nextIndex >= this._addresses.length) {
            throw PilosaError.generic("There are no available addresses");
        }
        const nextAddress = this._addresses[this._nextIndex];
        this._nextIndex = (this._nextIndex + 1) % this._addresses.length;
        return nextAddress;
    }

    removeAddress(address: URI): void {
        const count = this._addresses.length; 
        for (let i = 0; i < count; i++) {
            if (this._addresses[i].equals(address)) {
                this._addresses.splice(i, 1);
                break;
            }
        }
    }

    getAddresses(): Array<URI> {
        return this._addresses;
    }
}

class QueryRequest {
    private _databaseName: string;
    private _query: string;
    
    private constructor(databaseName: string) {
        this._databaseName = databaseName;
    }

    static withDatabase(databaseName: string) {
        Validator.ensureValidDatabaseName(databaseName);
        return new QueryRequest(databaseName);
    }

    set query(q: string) {
        this._query = q;
    }

    toProtoBuf() {
        const request = new internal.QueryRequest();
        request.DB = this._databaseName;
        request.Query = this._query;
        return internal.QueryRequest.encode(request).finish();
    }
}

export class URI {
    private _scheme: string = "http";
    private _host: string = "localhost";
    private _port: number = 15000;
    private static _uriPattern: RegExp = /^(([+a-z]+):\/\/)?([0-9a-z.-]+)?(:([0-9]+))?$/;

    private constructor(scheme?: string, host?: string, port?: number) {
        if (scheme != null) {
            this._scheme = scheme;
        }
        if (host != null) {
            this._host = host;
        }
        if (port != null) {
            this._port = port;
        }        
    }

    static defaultURI(): URI {
        return new URI();
    }

    static fromAddress(address: string): URI {
        return URI.parseAddress(address);
    }

    static withPort(port: number): URI {
        return new URI(null, null, port);
    }

    static withHostPort(host: string, port: number): URI {
        return new URI(null, host, port);
    }

    get scheme() {
        return this._scheme;
    }

    get host() {
        return this._host;
    }

    get port() {
        return this._port;
    }

    get normalizedAddress(): string {
        let scheme = this._scheme;
        const index = scheme.indexOf("+");
        if (index > 0) {
            scheme = scheme.substring(0, index);
        }
        return `${scheme}://${this._host}:${this._port}`;
    }

    toString(): string {
        return `${this._scheme}://${this._host}:${this._port}`;
    }

    equals(other: URI): boolean {
        return this._scheme == other._scheme &&
            this._host == other._host &&
            this._port == other._port;        
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
            return new URI(scheme, host, port);
        }
        throw PilosaError.uri("Not a Pilosa URI");
    }
}
