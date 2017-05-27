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
