import {expect} from 'chai';
import {Client, Cluster, URI} from '../lib/index';

describe('Client', () => {
    it ('should have default parameters', () => {
        let client = Client.defaultClient();
    });
    it ('can be created with a string address', () => {
        let client = Client.withAddress(":9999");        
    });

    it ('can be created with a URI', () => {
        let client = Client.withAddress(URI.defaultURI());
    });

    it ('can be created with a cluster', () => {
        let client = Client.withCluster(new Cluster());
    });
});
