import {expect} from 'chai';
import {QueryResponse, BitmapResult} from '../src/index';
import {__testing_QueryResponseWithError, __testing_triggerUnknownType} from '../src/response';

class TestableQueryResponse extends QueryResponse {
    static withDefaults(): QueryResponse {
        return new QueryResponse();
    }
}

describe('QueryResponse', () => {
    it('can be created with defaults', () => {
        let qr = TestableQueryResponse.withDefaults();
        expect(qr.results).eql([]);
        expect(qr.result).equal(null);
        expect(qr.errorMessage).equal('');
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

    it ('should have attributes and bits set to defaults', () => {
        const b = BitmapResult.fromInternal({});
        expect(b.attributes).eql({});
        expect(b.bits).eql([]);
    });
});
