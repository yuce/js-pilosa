
import {expect} from 'chai';
import {Client, Cluster, URI, PilosaError, PilosaURIError} from '../lib/index';

function compare(uri: URI, scheme: string, host: string, port: number) {
    expect(uri.scheme).equal(scheme);
    expect(uri.host).equal(host);
    expect(uri.port).equal(port);
}

describe('Client', () => {
    it ('can be created with a string address', () => {
        let client = Client.withAddress(":9999");        
    });

    it ('can be created with a URI', () => {
        let client = Client.withAddress(URI.defaultURI());
    });

    it ('can be created with a cluster', () => {
        let client = Client.withCluster(new Cluster());
    });

    it('should return a response', () => {
        let client = Client.defaultClient();
        let response = client.query("some-db", "Bitmap(id=1, frame='foo')");
        expect(response).not.equal(null);
        expect(response.results).not.equal(null);
    });    
});

describe('Cluster', () => {
    it('can be created with a URI', () => {
        let cluster = Cluster.withAddress(URI.defaultURI());
        let target: Array<URI> = [URI.defaultURI()];
        let addresses = cluster.getAddresses();
        expect(cluster.getAddresses()).eql([URI.defaultURI()]);
    });

    it('can be added addresses', () => {
        let cluster = new Cluster();
        cluster.addAddress(URI.fromAddress(":10101"));
        expect(cluster.getAddresses()).eql([URI.fromAddress("http://localhost:10101")]);
    });

    it ('can be removed addresses', () => {
        let cluster = Cluster.withAddress(URI.defaultURI());
        cluster.removeAddress(URI.defaultURI());
        expect(cluster.getAddresses()).eql([]);
    });

    it('should return next address', () => {
        let cluster = new Cluster();
        cluster.addAddress(URI.fromAddress("db1.pilosa.com"));
        cluster.addAddress(URI.fromAddress("db2.pilosa.com"));
        expect(cluster.getAddress()).eql(URI.fromAddress("db1.pilosa.com"));
        expect(cluster.getAddress()).eql(URI.fromAddress("db2.pilosa.com"));
    });

    it('should raise PilosaError for getAddress with empty list', () => {
        let cluster = new Cluster();
        expect(() => cluster.getAddress()).throw(PilosaError);
    })
});

describe('URI', () => {
    it('should have default URI', () => {
        let uri = URI.defaultURI();
        compare(uri, "http", "localhost", 15000);
    });

    it('can parse full URI', () => {
        let uri = URI.fromAddress("http+protobuf://db1.pilosa.com:3333");
        compare(uri, "http+protobuf", "db1.pilosa.com", 3333);
    });

    it('can be created with port', () => {
        let uri = URI.withPort(3333);
        compare(uri, "http", "localhost", 3333);
    });

    it('can be created with host and port', () => {
        let uri = URI.withHostPort("db1.pilosa.com", 3333);
        compare(uri, "http", "db1.pilosa.com", 3333);
    });

    it('can parse ipv4 host', () => {
        let uri = URI.fromAddress("http+protobuf://192.168.1.26:3333");
        compare(uri, "http+protobuf", "192.168.1.26", 3333);
    })

    it('can parse host only', () => {
        let uri = URI.fromAddress("db1.pilosa.com");
        compare(uri, "http", "db1.pilosa.com", 15000);
    });

    it('can parse port only', () => {
        let uri = URI.fromAddress(":5888");
        compare(uri, "http", "localhost", 5888);
    });

    it('can parse host and port', () => {
        let uri = URI.fromAddress("db1.big-data.com:5888");
        compare(uri, "http", "db1.big-data.com", 5888);
    });

    it('can parse scheme and host', () => {
        let uri = URI.fromAddress("https://db1.big-data.com");
        compare(uri, "https", "db1.big-data.com", 15000);
    });

    it('can parse scheme and host', () => {
        let uri = URI.fromAddress("https://db1.big-data.com");
        compare(uri, "https", "db1.big-data.com", 15000);
    });

    it('can get normalized address', () => {
        let uri1 = URI.fromAddress("http+protobuf://big-data.pilosa.com:6888");
        expect(uri1.normalizedAddress).equal("http://big-data.pilosa.com:6888");

        let uri2 = URI.defaultURI();
        expect(uri2.normalizedAddress).equal("http://localhost:15000");
    });

    it('should throw PilosaURIError for invalid address', () => {
        expect(() => URI.fromAddress("")).throw(PilosaURIError);
        expect(() => URI.fromAddress("foo:bar")).throw(PilosaURIError);
        expect(() => URI.fromAddress("http://foo:")).throw(PilosaURIError);
        expect(() => URI.fromAddress("foo:")).throw(PilosaURIError);
        expect(() => URI.fromAddress(":bar")).throw(PilosaURIError);
    });

    it('can be converted to string', () => {
        let uri = URI.fromAddress("http+protobuf://big-data.pilosa.com:6888");
        expect(`${uri}`).equal("http+protobuf://big-data.pilosa.com:6888");
    });

});
