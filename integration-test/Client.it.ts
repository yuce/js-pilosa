
import {expect} from 'chai';
import {Client, Cluster, Database, URI} from '../src/index';
import * as nock from 'nock';

const SERVER_ADDRESS = "http://localhost:10101";

class Util {
    private static counter = 0;
    static getClient() {
        return Client.withAddress(SERVER_ADDRESS);
    }
    static getRandomDatabase() {
        return Database.named(`testdb-${Util.counter++}`);
    }
}


describe('Client', () => {
    let db = Util.getRandomDatabase();
    const frameNames = [
        "foo", "query-test", "another-frame", "test",
        "count-test", "importframe", "topn_test"
    ];

    beforeEach(done => {
        const client = Util.getClient();
        client.ensureDatabaseExists(db).then(() => {
            let ensureFramesList = [];
            for (let name of frameNames) {
                ensureFramesList.push(client.ensureFrameExists(db.frame(name)));
            }
            Promise.all(ensureFramesList).
                then(_value => done(), done);
        }).catch(done);
    });

    afterEach(done => {
        nock.cleanAll();
        const client = Util.getClient();
        client.deleteDatabase(db).
            then(done).
            catch(done);
    });

    it('should return a response', done => {
        const client = Util.getClient();
        client.query(db, "SetBit(id=555, frame='query-test', profileID=10)").then(r => {
            expect(r).not.equal(null);
            done();
        }).catch(done);
    });
    it('should create and delete a database', done => {
        const tempdb = Database.named("to-be-deleted-" + db.name);
        const client = Util.getClient();
        client.createDatabase(tempdb).then(() =>
        client.createFrame(tempdb.frame("delframe"))).then(() =>
        client.query(tempdb, "SetBit(id=1, frame='delframe', profileID=2)")).then(() =>
        client.deleteDatabase(tempdb)).
            then(done).
            catch(done);
    });

    it('should throw an error on connection failure', done => {
        const client = Client.withAddress("http://non-existent-sub.pilosa.com:22222");
        client.query(db, "SetBit(id=15, frame='test', profileID=10)").
            then(() => done(new Error("should have failed"))).
            catch(_e => done());
    });

    it('should fail on unknown scheme', done => {
        const client = Client.withAddress("notknown://:15555");
        client.query(db, "SetBit(id=15, frame='test', profileID=10)").
            then(() => done(new Error("should have failed"))).
            catch(_e => done());
    });

    it('should fail on parsing errors', done => {
        const client = Util.getClient();
        client.query(db, "SetBit(id=15, frame='test', profileID:=10)").
            then(() => done(new Error("should have failed"))).
            catch(_e => done());
    });

    it('can receive count responses', done => {
        const client = Util.getClient();
        client.query(db, `
            SetBit(id=10, frame='count-test', profileID=20)
            SetBit(id=10, frame='count-test', profileID=21)
            SetBit(id=15, frame='count-test', profileID=25)`).then(_ =>
        client.query(db, "Count(Bitmap(id=10, frame='count-test'))")).then(r => {
            expect(r.result).not.null;
            if (r.result) {
                expect(r.result.count).equal(2);
            }
            done();
        }).catch(done);
    });

    it('should fail when creating existing database', done => {
        const client = Util.getClient();
        client.createDatabase(db).
            then(() => done(new Error("should have failed"))).
            catch(_e => done());
    });

    it('should fail when creating existing frame', done => {
        const client = Util.getClient();
        client.createFrame(db.frame("test")).
            then(() => done(new Error("should have failed"))).
            catch(_e => done());
    });

    it('should fail if it cannot delete a database', done => {
        const client = Client.withAddress("http://non-existent-sub.pilosa.com:22222");
        client.deleteDatabase(Database.named("non-existent")).
            then(() => done(new Error("should have failed"))).
            catch(_e => done());
    });

    it('should fail if it cannot ensure database existence', done => {
        const client = Client.withAddress("http://non-existent-sub.pilosa.com:22222");
        client.ensureDatabaseExists(db).
            then(() => done(new Error("should have failed"))).
            catch(_e => done());
    });

    it('should fail if it cannot ensure frame existence', done => {
        const client = Client.withAddress("http://non-existent-sub.pilosa.com:22222");
        client.ensureFrameExists(db.frame("foo")).
            then(() => done(new Error("should have failed"))).
            catch(_e => done());
    });

    it('can ensure database exists', done => {
        const client = Util.getClient();
        const tempdb = Database.named(db.name + "-ensure");
        client.ensureDatabaseExists(tempdb).then(() =>
        client.ensureFrameExists(tempdb.frame("frm"))).then(() =>
        client.ensureDatabaseExists(tempdb)).then(() =>
        client.deleteDatabase(tempdb)).
            then(done).
            catch(done);
    });

    it('can ensure frame exists', done => {
        const client = Util.getClient();
        const frameName = "ensure-frame";
        const frame = db.frame(frameName);
        client.ensureFrameExists(frame).then(() =>
        client.query(db, `Bitmap(id=1, frame='${frameName}')`)).then(() =>
        client.ensureFrameExists(frame)).
            then(done).
            catch(done);
    });

    it('can query bitmap', done => {
        const client = Util.getClient();
        client.query(db, `
                SetBit(id=5, frame='test', profileID=10)
                SetBit(id=5, frame='test', profileID=15)
                SetBit(id=10, frame='test', profileID=20)`).then(() =>
        client.query(db,`
                Bitmap(id=5, frame='test')
                Bitmap(id=10, frame='test')`)).then(r => {
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
        const client = Util.getClient();
        client.query(db, `
            SetBit(id=10, frame='test', profileID=5)
            SetBit(id=10, frame='test', profileID=10)
            SetBit(id=10, frame='test', profileID=15)
            SetBit(id=20, frame='test', profileID=5)
            SetBit(id=30, frame='test', profileID=5)`).then(_ =>
        client.query(db, "TopN(frame='test', n=2)")).then(r => {
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
        const client = Util.getClient();
        client.query(db, `
            SetBit(id=10, frame='test', profileID=44)
            SetBitmapAttrs(id=10, frame='test', name="some string", age=95, height=1.83, registered=true)`).then(_ =>
        client.query(db, "Bitmap(id=10, frame='test')")).then(r => {
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

    it('should throw an expection if the response was not decoded', done => {
        nock(SERVER_ADDRESS).
            post("/query").
            reply(200, () => "bad-reply");
        const client = Util.getClient();
        client.query(db, "Bitmap(id=1, frame='foo')").
            then(_ => done(new Error("should have failed"))).
            catch(_e => done());
    });

    it('can execute httpRequest with no data', done => {
        nock(SERVER_ADDRESS).
            get("/schema").
            reply(200, () => "{}");
        class C extends Client {
            static defaultClient() {
                return new C(Cluster.withHost(URI.fromAddress(SERVER_ADDRESS)));
            }
            httpSchema() {
                return this.httpRequest("GET", "/schema");
            }
        }
        const client = C.defaultClient();
        client.httpSchema().
            then(_ => done()).
            catch(done);
    });
});