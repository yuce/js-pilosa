/*
Copyright 2017 Yuce Tekol

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

1. Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright
notice, this list of conditions and the following disclaimer in the
documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
contributors may be used to endorse or promote products derived
from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
DAMAGE.
*/

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
