import {expect} from 'chai';
import {URI} from '../src/index';

function compare(uri: URI, scheme: string, host: string, port: number) {
    expect(uri.scheme).equal(scheme);
    expect(uri.host).equal(host);
    expect(uri.port).equal(port);
}

describe('URI', () => {
    it('should have default URI', () => {
        let uri = URI.defaultURI();
        compare(uri, "http", "localhost", 10101);
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
        compare(uri, "http", "db1.pilosa.com", 10101);
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
        compare(uri, "https", "db1.big-data.com", 10101);
    });

    it('can parse scheme and port', () => {
        let uri = URI.fromAddress("https://:10101");
        compare(uri, "https", "localhost", 10101);
    });

    it('can get normalized address', () => {
        let uri1 = URI.fromAddress("http+protobuf://big-data.pilosa.com:6888");
        expect(uri1.normalize()).equal("http://big-data.pilosa.com:6888");

        let uri2 = URI.defaultURI();
        expect(uri2.normalize()).equal("http://localhost:10101");
    });

    it('should throw PilosaURIError for invalid address', () => {
        expect(() => URI.fromAddress("")).throws();
        expect(() => URI.fromAddress("foo:bar")).throws();
        expect(() => URI.fromAddress("http://foo:")).throws();
        expect(() => URI.fromAddress("foo:")).throws();
        expect(() => URI.fromAddress(":bar")).throws();
    });

    it('can be converted to string', () => {
        let uri = URI.fromAddress("http+protobuf://big-data.pilosa.com:6888");
        expect(`${uri}`).equal("http+protobuf://big-data.pilosa.com:6888");
    });

});
