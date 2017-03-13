import {expect} from 'chai';
import {Cluster, URI, PilosaError} from '../src/index';

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
        let cluster = new Cluster();
        cluster.addAddress(URI.fromAddress("test.to:5600"));
        cluster.addAddress(URI.defaultURI());        
        cluster.removeAddress(URI.defaultURI());
        expect(cluster.getAddresses()).eql([URI.fromAddress("test.to:5600")]);
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
        expect(() => cluster.getAddress()).throw();
    })
});

