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
import {URI} from '../src/index';

function compare(uri: URI, scheme: string, host: string, port: number) {
    expect(uri.scheme).equal(scheme);
    expect(uri.host).equal(host);
    expect(uri.port).equal(port);
}

describe('URI', () => {
    it('should have default URI', () => {
        let uri = new URI();
        compare(uri, "http", "localhost", 10101);
    });

    it('can parse full URI', () => {
        let uri = URI.address("http+protobuf://db1.pilosa.com:3333");
        compare(uri, "http+protobuf", "db1.pilosa.com", 3333);
    });

    it('can be created with port', () => {
        let uri = new URI({port: 3333});
        compare(uri, "http", "localhost", 3333);
    });

    it('can be created with host and port', () => {
        let uri = new URI({host: "db1.pilosa.com", port: 3333});
        compare(uri, "http", "db1.pilosa.com", 3333);
    });

    it('can parse ipv4 host', () => {
        let uri = URI.address("http+protobuf://192.168.1.26:3333");
        compare(uri, "http+protobuf", "192.168.1.26", 3333);
    })

    it('can parse host only', () => {
        let uri = URI.address("db1.pilosa.com");
        compare(uri, "http", "db1.pilosa.com", 10101);
    });

    it('can parse port only', () => {
        let uri = URI.address(":5888");
        compare(uri, "http", "localhost", 5888);
    });

    it('can parse host and port', () => {
        let uri = URI.address("db1.big-data.com:5888");
        compare(uri, "http", "db1.big-data.com", 5888);
    });

    it('can parse scheme and host', () => {
        let uri = URI.address("https://db1.big-data.com");
        compare(uri, "https", "db1.big-data.com", 10101);
    });

    it('can parse scheme and port', () => {
        let uri = URI.address("https://:10101");
        compare(uri, "https", "localhost", 10101);
    });

    it('should throw PilosaURIError for invalid address', () => {
        expect(() => URI.address("")).throws();
        expect(() => URI.address("foo:bar")).throws();
        expect(() => URI.address("http://foo:")).throws();
        expect(() => URI.address("foo:")).throws();
        expect(() => URI.address(":bar")).throws();
    });

    it('can be converted to string', () => {
        let uri = URI.address("http+protobuf://big-data.pilosa.com:6888");
        expect(`${uri}`).equal("http+protobuf://big-data.pilosa.com:6888");
    });

});
