
import {QueryResponse, QueryResult} from './response';
import {PilosaError, PilosaURIError} from './error';


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

    query(database: string, query: string): QueryResponse {
        return new QueryResponse();
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
            throw new PilosaError("There are no available addresses");
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
        // console.log("A: ", this._addresses);
        return this._addresses;
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
            throw new PilosaURIError("Not a Pilosa URI");    
        }
        let m = URI._uriPattern.exec(address);
        if (m) {
            const scheme = m[2];
            const host = m[3];
            const port = (m[5] !== undefined)? parseInt(m[5]) : undefined;
            return new URI(scheme, host, port);
        }
        throw new PilosaURIError("Not a Pilosa URI");
    }
}