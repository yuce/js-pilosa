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
import {Index, CacheType, FrameOptions, TimeQuantum} from '../src/index';

const sampleDb = new Index("sample-db");
const sampleFrame = sampleDb.frame("sample-frame");
const projectDb = new Index("project-db", {columnLabel: "user"});
const collabFrame = projectDb.frame("collaboration", {rowLabel: "project"});

const b1 = sampleFrame.bitmap(10);
const b2 = sampleFrame.bitmap(20);
const b3 = sampleFrame.bitmap(42);
const b4 = collabFrame.bitmap(2);

describe('Index', () => {
    it('can create Union queries', () => {
        const qry1 = sampleDb.union(b1, b2);
        expect(qry1.serialize()).equal("Union(Bitmap(id=10, frame='sample-frame'), Bitmap(id=20, frame='sample-frame'))");

        const qry2 = sampleDb.union(b1, b2, b3);
        expect(qry2.serialize()).equal("Union(Bitmap(id=10, frame='sample-frame'), Bitmap(id=20, frame='sample-frame'), Bitmap(id=42, frame='sample-frame'))");

        const qry3 = sampleDb.union(b1, b4);
        expect(qry3.serialize()).equal("Union(Bitmap(id=10, frame='sample-frame'), Bitmap(project=2, frame='collaboration'))");
    });

    it('can create Intersect queries', () => {
        const qry1 = sampleDb.intersect(b1, b2);
        expect(qry1.serialize()).equal("Intersect(Bitmap(id=10, frame='sample-frame'), Bitmap(id=20, frame='sample-frame'))");

        const qry2 = sampleDb.intersect(b1, b2, b3);
        expect(qry2.serialize()).equal("Intersect(Bitmap(id=10, frame='sample-frame'), Bitmap(id=20, frame='sample-frame'), Bitmap(id=42, frame='sample-frame'))");

        const qry3 = sampleDb.intersect(b1, b4);
        expect(qry3.serialize()).equal("Intersect(Bitmap(id=10, frame='sample-frame'), Bitmap(project=2, frame='collaboration'))");
    });

    it('can create Difference queries', () => {
        const qry1 = sampleDb.difference(b1, b2);
        expect(qry1.serialize()).equal("Difference(Bitmap(id=10, frame='sample-frame'), Bitmap(id=20, frame='sample-frame'))");

        const qry2 = sampleDb.difference(b1, b2, b3);
        expect(qry2.serialize()).equal("Difference(Bitmap(id=10, frame='sample-frame'), Bitmap(id=20, frame='sample-frame'), Bitmap(id=42, frame='sample-frame'))");

        const qry3 = sampleDb.difference(b1, b4);
        expect(qry3.serialize()).equal("Difference(Bitmap(id=10, frame='sample-frame'), Bitmap(project=2, frame='collaboration'))");
    });

    it('can create Count queries', () => {
        const b = collabFrame.bitmap(42);
        const q = projectDb.count(b);
        expect(q.serialize()).equal("Count(Bitmap(project=42, frame='collaboration'))");
    });
});

describe('Frame', () => {
    it('can create Bitmap queries', () => {
        const qry1 = sampleFrame.bitmap(5);
        expect(qry1.serialize()).equal("Bitmap(id=5, frame='sample-frame')");

        const qry2 = collabFrame.bitmap(10);
        expect(qry2.serialize()).equal("Bitmap(project=10, frame='collaboration')");
    });

    it('can create SetBit queries', () => {
        const qry1 = sampleFrame.setBit(5, 10);
        expect(qry1.serialize()).equal("SetBit(id=5, frame='sample-frame', col_id=10)");

        const qry2 = collabFrame.setBit(10, 20);
        expect(qry2.serialize()).equal("SetBit(project=10, frame='collaboration', user=20)");
    });

    it('can create ClearBit queries', () => {
        const qry1 = sampleFrame.clearBit(5, 10);
        expect(qry1.serialize()).equal("ClearBit(id=5, frame='sample-frame', col_id=10)");

        const qry2 = collabFrame.clearBit(10, 20);
        expect(qry2.serialize()).equal("ClearBit(project=10, frame='collaboration', user=20)");
    });

    it('can create TopN queries', () => {
        const q1 = sampleFrame.topN(27);
        expect(q1.serialize()).equal("TopN(frame='sample-frame', n=27)");

        const q2 = sampleFrame.topN(10, collabFrame.bitmap(3));
        expect(q2.serialize()).equal("TopN(Bitmap(project=3, frame='collaboration'), frame='sample-frame', n=10)");

        const q3 = sampleFrame.topN(12, collabFrame.bitmap(7), "category", 80, 81);
        expect(q3.serialize()).equal("TopN(Bitmap(project=7, frame='collaboration'), frame='sample-frame', n=12, field='category', [80,81])");
    });
});

describe('FrameOptions', () => {
    it('can return options for HTTP request', () => {
        const options: FrameOptions = {
            rowLabel: "stargazer_id",
            timeQuantum: TimeQuantum.DAY_HOUR,
            inverseEnabled: true,
            cacheType: CacheType.RANKED,
            cacheSize: 1000
        }
        const index = new Index("myindex");
        const frame = index.frame("myframe", options);
        const target = {
            options: {
                rowLabel: "stargazer_id",
                timeQuantum: "DH",
                inverseEnabled: true,
                cacheType: "ranked",
                cacheSize: 1000
            }
        }
        expect(frame.optionsForRequest).eql(target);
    });
});

describe('CacheType', () => {
    it('can set value', () => {
        const ct = CacheType.LRU;
        expect(ct.toString()).equal("lru");
    });

    it('can compare equality', () => {
        expect(CacheType.RANKED.equals(CacheType.RANKED)).true;
        expect(CacheType.RANKED.equals(CacheType.LRU)).false;
    });
})