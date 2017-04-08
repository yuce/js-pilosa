import {Client, Cluster, URI} from '../src/index';

describe('Client', () => {
    it ('should have default parameters', () => {
        new Client();
    });

    it ('can be created with a string address', () => {
        new Client(":9999");
    });

    it ('can be created with a URI', () => {
        new Client(new URI());
    });

    it ('can be created with a cluster', () => {
        new Client(new Cluster());
    });
});
