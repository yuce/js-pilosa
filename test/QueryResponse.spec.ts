import {expect} from 'chai';
import {QueryResponse} from '../src/index';
import {__testing_triggerUnknownType, __testing_QueryResponseWithError} from '../src/response';

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

    it('should return error message', () => {
        let qr = __testing_QueryResponseWithError("some error");
        expect(qr.errorMessage).equal("some error");
        expect(qr.isSuccess).equal(false);
    })
});

describe('BitmapResult', () => {
    it('should fail if it recieves an attribute with an unknown type', () => {
        expect(() => __testing_triggerUnknownType()).throws();
    });
});
