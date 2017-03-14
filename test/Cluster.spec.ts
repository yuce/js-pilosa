import {expect} from 'chai';
import {Cluster, URI, PilosaError} from '../src/index';

describe('Cluster', () => {
    it('can be created with a URI', () => {
        let c = Cluster.withAddress(URI.defaultURI());
        let target: Array<URI> = [URI.defaultURI()];
        let addresses = c.getAddresses();
        expect(c.getAddresses()).eql([URI.defaultURI()]);
    });

    it('can add addresses', () => {
        let c = new Cluster();
        c.addAddress(URI.fromAddress(":10101"));
        expect(c.getAddresses()).eql([URI.fromAddress("http://localhost:10101")]);
    });

    it ('can remove addresses', () => {
        const target1 = URI.fromAddress("db1.pilosa.com");
        const target2 = URI.fromAddress("db2.pilosa.com");

        let c = new Cluster();
        c.addAddress(URI.fromAddress("db1.pilosa.com"));
        c.addAddress(URI.fromAddress("db2.pilosa.com"));
        expect(c.getAddress()).eql(target1);
        expect(c.getAddress()).eql(target2);
        c.getAddress();
        c.removeAddress(target1);
        expect(c.getAddress()).eql(target2);
    });

    it('should return next address', () => {
        let c = new Cluster();
        c.addAddress(URI.fromAddress("db1.pilosa.com"));
        c.addAddress(URI.fromAddress("db2.pilosa.com"));
        expect(c.getAddress()).eql(URI.fromAddress("db1.pilosa.com"));
        expect(c.getAddress()).eql(URI.fromAddress("db2.pilosa.com"));
    });

    it('should raise PilosaError for getAddress with empty list', () => {
        let cluster = new Cluster();
        expect(() => cluster.getAddress()).throw();
    })
});
