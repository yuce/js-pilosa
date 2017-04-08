import {expect} from 'chai';
import {Database} from '../src/orm';

const sampleDb = Database.named("sample-db");
const sampleFrame = sampleDb.frame("sample-frame");
const projectDb = Database.named("project-db", {columnLabel: "user"});
const collabFrame = projectDb.frame("collaboration", {rowLabel: "project"});

const b1 = sampleFrame.bitmap(10);
const b2 = sampleFrame.bitmap(20);
const b3 = sampleFrame.bitmap(42);
const b4 = collabFrame.bitmap(2);

describe('Database', () => {
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
