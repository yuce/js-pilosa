import {expect} from 'chai';
import {Database} from '../src/orm';
import {DatabaseOptions, FrameOptions} from '../src/index';

const sampleDb = Database.named("sample-db");
const sampleFrame = sampleDb.frame("sample-frame");
const projectDb = Database.named("project-db", DatabaseOptions.withColumnLabel("user"));
const collabFrame = projectDb.frame("collaboration", FrameOptions.withRowLabel("project"));

const b1 = sampleFrame.bitmap(10);
const b2 = sampleFrame.bitmap(20);
const b3 = sampleFrame.bitmap(42);
const b4 = collabFrame.bitmap(2);

describe('Database', () => {
    it('can create Union queries', () => {
        const qry1 = sampleDb.union(b1, b2);
        expect(qry1.toString()).equal("Union(Bitmap(id=10, frame='sample-frame'), Bitmap(id=20, frame='sample-frame'))");

        const qry2 = sampleDb.union(b1, b2, b3);
        expect(qry2.toString()).equal("Union(Bitmap(id=10, frame='sample-frame'), Bitmap(id=20, frame='sample-frame'), Bitmap(id=42, frame='sample-frame'))");

        const qry3 = sampleDb.union(b1, b4);
        expect(qry3.toString()).equal("Union(Bitmap(id=10, frame='sample-frame'), Bitmap(project=2, frame='collaboration'))");
    });

    it('can create Intersect queries', () => {
        const qry1 = sampleDb.intersect(b1, b2);
        expect(qry1.toString()).equal("Intersect(Bitmap(id=10, frame='sample-frame'), Bitmap(id=20, frame='sample-frame'))");

        const qry2 = sampleDb.intersect(b1, b2, b3);
        expect(qry2.toString()).equal("Intersect(Bitmap(id=10, frame='sample-frame'), Bitmap(id=20, frame='sample-frame'), Bitmap(id=42, frame='sample-frame'))");

        const qry3 = sampleDb.intersect(b1, b4);
        expect(qry3.toString()).equal("Intersect(Bitmap(id=10, frame='sample-frame'), Bitmap(project=2, frame='collaboration'))");
    });

    it('can create Difference queries', () => {
        const qry1 = sampleDb.difference(b1, b2);
        expect(qry1.toString()).equal("Difference(Bitmap(id=10, frame='sample-frame'), Bitmap(id=20, frame='sample-frame'))");

        const qry2 = sampleDb.difference(b1, b2, b3);
        expect(qry2.toString()).equal("Difference(Bitmap(id=10, frame='sample-frame'), Bitmap(id=20, frame='sample-frame'), Bitmap(id=42, frame='sample-frame'))");

        const qry3 = sampleDb.difference(b1, b4);
        expect(qry3.toString()).equal("Difference(Bitmap(id=10, frame='sample-frame'), Bitmap(project=2, frame='collaboration'))");
    });

    it('can create Count queries', () => {
        const b = collabFrame.bitmap(42);
        const q = projectDb.count(b);
        expect(q.toString()).equal("Count(Bitmap(project=42, frame='collaboration'))");
    });
});

describe('Frame', () => {
    it('can create Bitmap queries', () => {
        const qry1 = sampleFrame.bitmap(5);
        expect(qry1.toString()).equal("Bitmap(id=5, frame='sample-frame')");

        const qry2 = collabFrame.bitmap(10);
        expect(qry2.toString()).equal("Bitmap(project=10, frame='collaboration')");
    });

    it('can create SetBit queries', () => {
        const qry1 = sampleFrame.setBit(5, 10);
        expect(qry1.toString()).equal("SetBit(id=5, frame='sample-frame', profileID=10)");

        const qry2 = collabFrame.setBit(10, 20);
        expect(qry2.toString()).equal("SetBit(project=10, frame='collaboration', user=20)");
    });

    it('can create ClearBit queries', () => {
        const qry1 = sampleFrame.clearBit(5, 10);
        expect(qry1.toString()).equal("ClearBit(id=5, frame='sample-frame', profileID=10)");

        const qry2 = collabFrame.clearBit(10, 20);
        expect(qry2.toString()).equal("ClearBit(project=10, frame='collaboration', user=20)");
    });

    it('can create TopN queries', () => {
        const q1 = sampleFrame.topN(27);
        expect(q1.toString()).equal("TopN(frame='sample-frame', n=27)");

        const q2 = sampleFrame.topN(10, collabFrame.bitmap(3));
        expect(q2.toString()).equal("TopN(Bitmap(project=3, frame='collaboration'), frame='sample-frame', n=10)");

        const q3 = sampleFrame.topN(12, collabFrame.bitmap(7), "category", 80, 81);
        expect(q3.toString()).equal("TopN(Bitmap(project=7, frame='collaboration'), frame='sample-frame', n=12, field='category', [80,81])");
    });
});

describe('DatabaseOptions', () => {
    it('can be created with defaults', () => {
        let options = DatabaseOptions.withDefaults();
        expect(options.columnLabel).equal("profileID");
    });

    it('can be created with a column label', () => {
        let options = DatabaseOptions.withColumnLabel("the_col");
        expect(options.columnLabel).equal("the_col");
    });
});

describe('FrameOptions', () => {
    it('can be created with defaults', () => {
        let options = FrameOptions.withDefaults();
        expect(options.rowLabel).equal("id");
    });

    it('can be created with a row label', () => {
        let options = FrameOptions.withRowLabel("the_row");
        expect(options.rowLabel).equal("the_row");
    });
});