
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

    beforeEach(done => {
        const client = Util.getClient();
        dbname = Util.getRandomDatabaseName();
        client.ensureDatabaseExists(dbname).then(() => {
            let ensureFramesList = [];
            for (let name of framesList) {
                ensureFramesList.push(client.ensureFrameExists(dbname, name));
            }
            Promise.all(ensureFramesList).
                then(value => done(), done);
        }).catch(done);
    });

    afterEach(done => {
        const client = Util.getClient();
        client.deleteDatabase(dbname).
            then(done).
            catch(done);
    });

    it('should return a response', done => {
        const client = Util.getClient();
        client.query(dbname, "SetBit(id=555, frame='query-test', profileID=10)").then(response => {
            expect(response).not.equal(null);
            done();
        }).catch(done);
    });

    it('should create and delete a database', done => {
        const db = "to-be-deleted-" + dbname;
        const client = Util.getClient();
        client.createDatabase(db).then(() => {
            client.createFrame(db, "delframe").then(() => {
                client.query(db, "SetBit(id=1, frame='delframe', profileID=2)").then(r => {
                    client.deleteDatabase(db).
                        then(done).
                        catch(done);
                }).
                catch(done);
            }).
            catch(done);
        }).
        catch(done);
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
                catch(done);
        }).
        catch(err => done(err));
    });

    it('should fail when creating existing database', done => {
        const client = Util.getClient();
        client.createDatabase(dbname).
            then(() => done(new Error("should have failed"))).
            catch(e => done());        
    });

    it('should fail when creating existing frame', done => {
        const client = Util.getClient();
        client.createFrame(dbname, "test").
            then(() => done(new Error("should have failed"))).
            catch(e => done());                
    });

    it('should fail if it cannot delete a database', done => {
        const client = Client.withAddress("http://non-existent-sub.pilosa.com:22222");
        client.deleteDatabase("non-existent").
            then(() => done(new Error("should have failed"))).
            catch(e => done());
    });

    it('can ensure database exists', done => {
        const client = Util.getClient();
        const db = dbname + "-ensure";
        client.ensureDatabaseExists(db).then(() => {
            client.ensureFrameExists(db, "frm").then(() => {
                client.ensureDatabaseExists(db).then(() => {
                    client.deleteDatabase(db).
                        then(done).
                        catch(done);
                }).catch(done);
            }).catch(done);
        }).catch(done);
    });

    it('can ensure frame exists', done => {
        const client = Util.getClient();
        const frameName = "ensure-frame"
        client.ensureFrameExists(dbname, frameName).then(() => {
            client.query(dbname, `Bitmap(id=1, frame='${frameName}')`).then(r => {
                client.ensureFrameExists(dbname, frameName).
                    then(done).
                    catch(done);
            }).catch(done);
        }).catch(done);
    });
});
