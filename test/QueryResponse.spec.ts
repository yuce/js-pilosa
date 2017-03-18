import {expect} from 'chai';
import {QueryResponse} from '../src/index';
import {BitmapResult, __testing_triggerUnknownType, __testing_QueryResponseWithError, __testing_empty_Bitmap} from '../src/response';

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
        // Bits and Attrs of internal.Bitmap are never null, this test exists for 100% coverage
        const bitmap = __testing_empty_Bitmap();
        bitmap.Attrs = undefined;
        const br = BitmapResult.fromInternal(bitmap);
        expect(br.attributes).eql({});
        expect(br.bits).eql([]);
    })
});
