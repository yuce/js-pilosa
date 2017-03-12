import {expect} from 'chai';
import {QueryResponse} from '../lib/index';

class TestableQueryResponse extends QueryResponse {
    static withDefaults(): QueryResponse {
        return new QueryResponse();
    }
}

describe('QueryResponse', () => {
    it('can be created with defaults', () => {
        let qr = TestableQueryResponse.withDefaults();
        expect(qr.results).equal(null);
        expect(qr.result).equal(null);
        expect(qr.errorMessage).equal(null);
        expect(qr.isSuccess).equal(false);
    });
});
