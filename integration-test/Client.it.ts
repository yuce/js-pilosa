
import {expect} from 'chai';
import {Client} from '../lib/index';

const SERVER_ADDRESS = "http://localhost:15000";

class Util {
    private static counter = 0;
    static getClient() {
        return Client.withAddress(SERVER_ADDRESS);
    }
    static getRandomDatabaseName() {
        return `testdb-${Util.counter++}`;
    }    
}


describe('Client', () => {
    let dbname: string = null;
    const framesList = [
        "foo", "query-test", "another-frame", "test",
        "count-test", "importframe", "topn_test"
    ];

    beforeEach((done) => {
        const client = Util.getClient();
        dbname = Util.getRandomDatabaseName();
        client.ensureDatabaseExists(dbname).then(() => {
            let ensureFramesList = [];
            for (let name of framesList) {
                ensureFramesList.push(client.ensureFrameExists(dbname, name));
            }
            Promise.all(ensureFramesList).
                then(value => done(),
                    err => done(err));
            // client.ensureFrameExists(dbname, "foo").then(done).catch(done);
        }).catch(err => done(err));
    });

    afterEach((done) => {
        const client = Util.getClient();
        client.deleteDatabase(dbname).
            then(done)
            .catch(err => done(err));
    });

    it('should return a response', done => {
        const client = Util.getClient();
        client.query(dbname, "SetBit(id=555, frame='query-test', profileID=10)").then(response => {
            expect(response).not.equal(null);
            done();
        }).catch(e => {
            done(e);
        });
    });

    it('should create and delete a database', done => {
        const db = "to-be-deleted-" + dbname;
        const client = Util.getClient();
        client.createDatabase(db).then(() => {
            client.createFrame(db, "delframe").then(() => {
                client.query(db, "SetBit(id=1, frame='delframe', profileID=2)").then(r => {
                    client.deleteDatabase(db).
                        then(done)
                        .catch(e => done(e));
                }).
                catch(e => done(e));
            }).
            catch(e => done(e));
        }).
        catch(e => done(e));
    });

    it('should throw an error on connection failure', done => {
        const client = Client.withAddress("http://non-existent-sub.pilosa.com:22222");
        client.query(dbname, "SetBit(id=15, frame='test', profileID=10)").
            then(() => done(new Error("should have failed"))).
            catch(e => done());
    });

    it('should fail on unknown scheme', done => {
        const client = Client.withAddress("notknown://:15555");
        client.query(dbname, "SetBit(id=15, frame='test', profileID=10)").
            then(() => done(new Error("should have failed"))).
            catch(e => done());            
    });

    it('should fail on parsing errors', done => {
        const client = Util.getClient();
        client.query(dbname, "SetBit(id=15, frame='test', profileID:=10)").
            then(() => done(new Error("should have failed"))).
            catch(e => done());            
    });

    it('can receive count responses', done => {
        const client = Util.getClient();
        client.query(dbname, `
            SetBit(id=10, frame='count-test', profileID=20)
            SetBit(id=10, frame='count-test', profileID=21)
            SetBit(id=15, frame='count-test', profileID=25)
        `).then(_ => {
            client.query(dbname, "Count(Bitmap(id=10, frame='count-test'))").
                then(r => {
                    expect(r.result.count).equal(2);
                    done();
                }).
                catch(err => done(err));
        }).
        catch(err => done(err));
    });
});

/* 
        final String dbname = "to-be-deleted-" + this.db ;
        PilosaClient client = getClient();
        client.createDatabase(dbname);
        client.createFrame(dbname, "delframe");
        client.query(dbname, Pql.setBit(1, "delframe", 2));
        client.deleteDatabase(dbname);
*/
/*

            expect(response.isSuccess).true;
            expect(response.results).not.equal(null);
            expect(response.results.length).equal(1);
            expect(response.results[0].bitmap).not.equal(null);
*/
