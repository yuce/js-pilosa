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
        expect(qry1.serialize()).equal("Union(Bitmap(rowID=10, frame='sample-frame'), Bitmap(rowID=20, frame='sample-frame'))");

        const qry2 = sampleDb.union(b1, b2, b3);
        expect(qry2.serialize()).equal("Union(Bitmap(rowID=10, frame='sample-frame'), Bitmap(rowID=20, frame='sample-frame'), Bitmap(rowID=42, frame='sample-frame'))");

        const qry3 = sampleDb.union(b1, b4);
        expect(qry3.serialize()).equal("Union(Bitmap(rowID=10, frame='sample-frame'), Bitmap(project=2, frame='collaboration'))");

        const qry4 = sampleDb.union();
        expect(qry4.serialize()).equal("Union()");
    });

    it('can create Intersect queries', () => {
        const qry1 = sampleDb.intersect(b1, b2);
        expect(qry1.serialize()).equal("Intersect(Bitmap(rowID=10, frame='sample-frame'), Bitmap(rowID=20, frame='sample-frame'))");

        const qry2 = sampleDb.intersect(b1, b2, b3);
        expect(qry2.serialize()).equal("Intersect(Bitmap(rowID=10, frame='sample-frame'), Bitmap(rowID=20, frame='sample-frame'), Bitmap(rowID=42, frame='sample-frame'))");

        const qry3 = sampleDb.intersect(b1, b4);
        expect(qry3.serialize()).equal("Intersect(Bitmap(rowID=10, frame='sample-frame'), Bitmap(project=2, frame='collaboration'))");

        const qry4 = sampleDb.intersect(b1);
        expect(qry4.serialize()).equal("Intersect(Bitmap(rowID=10, frame='sample-frame'))");

        expect(() => sampleDb.intersect()).throw();
    });

    it('can create Difference queries', () => {
        const qry1 = sampleDb.difference(b1, b2);
        expect(qry1.serialize()).equal("Difference(Bitmap(rowID=10, frame='sample-frame'), Bitmap(rowID=20, frame='sample-frame'))");

        const qry2 = sampleDb.difference(b1, b2, b3);
        expect(qry2.serialize()).equal("Difference(Bitmap(rowID=10, frame='sample-frame'), Bitmap(rowID=20, frame='sample-frame'), Bitmap(rowID=42, frame='sample-frame'))");

        const qry3 = sampleDb.difference(b1, b4);
        expect(qry3.serialize()).equal("Difference(Bitmap(rowID=10, frame='sample-frame'), Bitmap(project=2, frame='collaboration'))");

        expect(() => sampleDb.difference()).throw();
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
        expect(qry1.serialize()).equal("Bitmap(rowID=5, frame='sample-frame')");

        const qry2 = collabFrame.bitmap(10);
        expect(qry2.serialize()).equal("Bitmap(project=10, frame='collaboration')");
    });

    it('can create inverse Bitmap queries', () => {
        const options: FrameOptions = {
            rowLabel: "row_label",
            inverseEnabled: true
        }
        const f1 = projectDb.frame("f1-inversable", options);
        const qry = f1.inverseBitmap(5);
        expect(qry.serialize()).equal("Bitmap(user=5, frame='f1-inversable')");
    });

    it('can create SetBit queries', () => {
        const qry1 = sampleFrame.setBit(5, 10);
        expect(qry1.serialize()).equal("SetBit(rowID=5, frame='sample-frame', columnID=10)");

        const qry2 = collabFrame.setBit(10, 20);
        expect(qry2.serialize()).equal("SetBit(project=10, frame='collaboration', user=20)");
        
    });

    it('can create SetBit queries with a timestamp', () => {
        const timestamp = new Date(2017, 3, 24, 12, 14);
        const qry = collabFrame.setBit(10, 20, timestamp);
        expect(qry.serialize()).equal("SetBit(project=10, frame='collaboration', user=20, timestamp='2017-04-24T12:14')");
    });

    it('can create ClearBit queries', () => {
        const qry1 = sampleFrame.clearBit(5, 10);
        expect(qry1.serialize()).equal("ClearBit(rowID=5, frame='sample-frame', columnID=10)");

        const qry2 = collabFrame.clearBit(10, 20);
        expect(qry2.serialize()).equal("ClearBit(project=10, frame='collaboration', user=20)");
    });

    it('can create TopN queries', () => {
        const q1 = sampleFrame.topN(27);
        expect(q1.serialize()).equal("TopN(frame='sample-frame', n=27, inverse=false)");

        const q2 = sampleFrame.topN(10, collabFrame.bitmap(3));
        expect(q2.serialize()).equal("TopN(Bitmap(project=3, frame='collaboration'), frame='sample-frame', n=10, inverse=false)");

        const q3 = sampleFrame.topN(12, collabFrame.bitmap(7), "category", 80, 81);
        expect(q3.serialize()).equal("TopN(Bitmap(project=7, frame='collaboration'), frame='sample-frame', n=12, inverse=false, field='category', [80,81])");

        const q4 = sampleFrame.inverseTopN(27);
        expect(q4.serialize()).equal("TopN(frame='sample-frame', n=27, inverse=true)");

        const q5 = sampleFrame.inverseTopN(12, collabFrame.bitmap(7), "category", 80, 81);
        expect(q5.serialize()).equal("TopN(Bitmap(project=7, frame='collaboration'), frame='sample-frame', n=12, inverse=true, field='category', [80,81])");
    });

    it('can create Range queries', () => {
        const start = new Date(1970, 0, 1, 0, 0);
        const end = new Date(2000, 1, 2, 3, 4);
        
        const q1 = collabFrame.range(10, start, end);
        expect(q1.serialize()).equal("Range(project=10, frame='collaboration', start='1970-01-01T00:00', end='2000-02-02T03:04')");

        const q2 = collabFrame.inverseRange(10, start, end);
        expect(q2.serialize()).equal("Range(user=10, frame='collaboration', start='1970-01-01T00:00', end='2000-02-02T03:04')");
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