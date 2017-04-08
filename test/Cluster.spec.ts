import {expect} from 'chai';
import {Cluster, URI} from '../src/index';

describe('Cluster', () => {
    it('can be created with a URI', () => {
        let c = new Cluster(new URI());
        expect(c.hosts).eql([new URI()]);
    });

    it('can add hosts', () => {
        let c = new Cluster();
        c.addHost(URI.address(":10101"));
        expect(c.hosts).eql([URI.address("http://localhost:10101")]);
    });

    it ('can remove hosts', () => {
        const target1 = URI.address("db1.pilosa.com");
        const target2 = URI.address("db2.pilosa.com");

        let c = new Cluster();
        c.addHost(URI.address("db1.pilosa.com"));
        c.addHost(URI.address("db2.pilosa.com"));
        expect(c.getHost()).eql(target1);
        expect(c.getHost()).eql(target2);
        c.getHost();
        c.removeHost(target1);
        expect(c.getHost()).eql(target2);
        c.addHost(URI.address("db2.pilosa.com"));
        c.removeHost(target1);
    });

    it('should return next host', () => {
        let c = new Cluster();
        c.addHost(URI.address("db1.pilosa.com"));
        c.addHost(URI.address("db2.pilosa.com"));
        expect(c.getHost()).eql(URI.address("db1.pilosa.com"));
        expect(c.getHost()).eql(URI.address("db2.pilosa.com"));
    });

    it('should raise PilosaError for getHost with empty list', () => {
        let cluster = new Cluster();
        expect(() => cluster.getHost()).throw();
    })
});
