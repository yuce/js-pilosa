
import {expect} from 'chai';
import {Client, Cluster, Index, URI, TimeQuantum} from '../src/index';
import * as nock from 'nock';

const SERVER_ADDRESS = "http://localhost:10101";

class Util {
    private static counter = 0;
    static getClient() {
        return new Client(SERVER_ADDRESS);
    }
    static getRandomIndex() {
        return new Index(`testdb-${Util.counter++}`);
    }
}


describe('Client', () => {
    let db = Util.getRandomIndex();
    const frameNames = [
        "foo", "query-test", "another-frame", "test",
        "count-test", "importframe", "topn_test"
    ];
    let frame = db.frame("test");
    const client = Util.getClient();


    beforeEach(done => {
        client.ensureIndex(db).then(() => {
            let ensureFramesList = [];
            for (let name of frameNames) {
                ensureFramesList.push(client.ensureFrame(db.frame(name)));
            }
            Promise.all(ensureFramesList).
                then(_value => done(), done);
        }).catch(done);
    });

    afterEach(done => {
        nock.cleanAll();
        const client = Util.getClient()
        client.deleteIndex(db)
            .then(done)
            .catch(done);
    });

    it('should return a response', done => {
        client.query(db.frame("query-test").setBit(155, 10)).then(r => {
            expect(r).not.equal(null);
            done();
        }).catch(done);
    });
    it('should create and delete an index', done => {
        const tempdb = new Index("to-be-deleted-" + db.name);
        client.createIndex(tempdb).then(() =>
        client.createFrame(tempdb.frame("delframe"))).then(() =>
        client.query(tempdb.frame("delframe").setBit(1, 2))).then(() =>
        client.deleteIndex(tempdb))
            .then(done)
            .catch(done);
    });

    it('should throw an error on connection failure', done => {
        const client = new Client("http://non-existent-sub.pilosa.com:22222");
        client.query(frame.setBit(15, 10))
            .then(() => done(new Error("should have failed")))
            .catch(_e => done());
    });

    it('should fail on unknown scheme', done => {
        const client = new Client("notknown://:15555");
        client.query(frame.setBit(15, 10))
            .then(() => done(new Error("should have failed")))
            .catch(_e => done());
    });

    it('should fail on parsing errors', done => {
        client.query(db.rawQuery("SetBit(id=15, frame='test', col_id:=10)"))
            .then(() => done(new Error("should have failed")))
            .catch(_e => done());
    });

    it('can receive count responses', done => {
        const f = db.frame("count-test");
        client.query(db.batchQuery(
            f.setBit(10, 20),
            f.setBit(10, 21),
            f.setBit(15, 25))).then(_ =>
        client.query(db.count(f.bitmap(10)))).then(r => {
            expect(r.result).not.null;
            if (r.result) {
                expect(r.result.count).equal(2);
            }
            done();
        }).catch(done);
    });

    it('should fail when creating existing index', done => {
        client.createIndex(db)
            .then(() => done(new Error("should have failed")))
            .catch(_e => done());
    });

    it('should fail when creating existing frame', done => {
        client.createFrame(frame)
            .then(() => done(new Error("should have failed")))
            .catch(_e => done());
    });

    it('should fail if it cannot delete an index', done => {
        const client = new Client("http://non-existent-sub.pilosa.com:22222");
        client.deleteIndex(new Index("non-existent"))
            .then(() => done(new Error("should have failed")))
            .catch(_e => done());
    });

    it('should fail if it cannot ensure index existence', done => {
        const client = new Client("http://non-existent-sub.pilosa.com:22222");
        client.ensureIndex(db)
            .then(() => done(new Error("should have failed")))
            .catch(_e => done());
    });

    it('should fail if it cannot ensure frame existence', done => {
        const client = new Client("http://non-existent-sub.pilosa.com:22222");
        client.ensureFrame(db.frame("foo"))
            .then(() => done(new Error("should have failed")))
            .catch(_e => done());
    });

    it('can ensure index exists', done => {
        const tempdb = new Index(db.name + "-ensure");
        client.ensureIndex(tempdb).then(() =>
        client.ensureFrame(tempdb.frame("frm"))).then(() =>
        client.ensureIndex(tempdb)).then(() =>
        client.deleteIndex(tempdb))
            .then(done)
            .catch(done);
    });

    it('can ensure frame exists', done => {
        const frameName = "ensure-frame";
        const frame = db.frame(frameName);
        client.ensureFrame(frame).then(() =>
        client.query(frame.bitmap(1))).then(() =>
        client.ensureFrame(frame))
            .then(done)
            .catch(done);
    });

    it('can create an index with time quantum', done => {
        const db = new Index("db-with-timequantum", {
            timeQuantum: TimeQuantum.YEAR
        });
        client.ensureIndex(db).then(() =>
        client.deleteIndex(db))
            .then(done)
            .catch(done);
    });

    it('can create a frame with time quantum', done => {
        const frame = db.frame("frame-with-timequantum", {
            timeQuantum: TimeQuantum.YEAR_MONTH_DAY
        });
        client.ensureFrame(frame)
            .then(done)
            .catch(done);
    });

    it('can delete a frame', done => {
        const frame = db.frame("to-be-deleted");
        client.ensureFrame(frame).then(() =>
        client.deleteFrame(frame))
            .then(done)
            .catch(done);
    });

    it('can query bitmap', done => {
        client.query(db.batchQuery(
                frame.setBit(5, 10),
                frame.setBit(5, 15),
                frame.setBit(10, 20))).then(() =>
        client.query(db.batchQuery(
                frame.bitmap(5),
                frame.bitmap(10)))).then(r => {
            expect(r.results.length).equal(2);
            expect(r.result).not.null;
            if (r.result) {
                expect(r.result.bitmap.attributes).eql({});
                expect(r.result.bitmap.bits).eql([10, 15]);
                expect(r.results[0].bitmap.bits).eql([10, 15]);
                expect(r.results[1].bitmap.bits).eql([20]);
            }
            done();
        }).catch(done);
    });

    it('can query topn', done => {
        let frame = db.frame("topn_test");``
        client.query(db.batchQuery(
            frame.setBit(10, 5),
            frame.setBit(10, 10),
            frame.setBit(10, 15),
            frame.setBit(20, 5),
            frame.setBit(30, 5))).then(_ =>
        client.query(frame.topN(2))).then(r => {
            expect(r.result).not.null;
            if (r.result) {
                expect(r.result.countItems.length).equal(2);
                expect(r.result.countItems[0].id).equal(10);
                expect(r.result.countItems[0].count).equal(3);
            }
            done();
        }).catch(done);
    });

    it('can retrieve bitmap attributes', done => {
        const attrs = {
            name: "some string",
            age: 95,
            height: 1.83,
            registered: true
        };
        client.query(db.batchQuery(
            frame.setBit(10, 44),
            frame.setRowAttrs(10, attrs))).then(_ =>
        client.query(frame.bitmap(10))).then(r => {
            expect(r.result).not.null;
            if (r.result) {
                expect(r.result.bitmap.attributes).eql({
                    name: "some string",
                    age: 95,
                    height: 1.83,
                    registered: true
                });
            }
            done();
        }).catch(done);
    });

    it('can query with columns', done => {
        const frame = db.frame("query-test");
        client.ensureFrame(frame).then(() =>
        client.query(frame.setBit(100, 1000))).then(() =>
        client.query(frame.setBit(100, 1000))).then(() =>
        client.query(db.setColumnAttrs(1000, {name: "bombo"}))).then(() =>
        client.query(frame.bitmap(100), {columns: true})).then(r => {
            expect(r).not.null;
            expect(r.column).not.null;
            if (r.column) {
                expect(r.column.id).equal(1000);
                expect(r.column.attributes).eql({name: "bombo"});
            }
        }).then(() =>
        client.query(frame.bitmap(300))).then(r => {
            expect(r).not.null;
            expect(r.column).null;
            done();
        }).catch(done);
    });

    it('should throw an expection if the response was not decoded', done => {
        nock(SERVER_ADDRESS).
            post(`/index/${db.name}/query`).
            reply(200, () => "bad-reply");
        client.query(db.frame("foo").bitmap(1))
            .then(_ => done(new Error("should have failed")))
            .catch(_e => done());
    });

    it('can execute httpRequest with no data', done => {
        nock(SERVER_ADDRESS).
            get("/schema").
            reply(200, () => "{}");
        class C extends Client {
            static defaultClient() {
                return new C(new Cluster(URI.address(SERVER_ADDRESS)));
            }
            httpSchema() {
                return this.httpRequest("GET", "/schema");
            }
        }
        const client = C.defaultClient();
        client.httpSchema()
            .then(_ => done())
            .catch(done);
    });
});
