import {expect} from 'chai';
import {Client, Cluster, URI} from '../src/index';

describe('Client', () => {
    it ('should have default parameters', () => {
        Client.defaultClient();
    });

    it ('can be created with a string address', () => {
        let client = Client.withAddress(":9999");
        expect(client).not.null
    });

    it ('can be created with a URI', () => {
        let client = Client.withAddress(URI.defaultURI());
        expect(client).not.null
    });

    it ('can be created with a cluster', () => {
        let client = Client.withCluster(new Cluster());
        expect(client).not.null
    });
});
