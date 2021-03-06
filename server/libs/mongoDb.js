const MongoClient = require('mongodb').MongoClient;
const config = require('../config/index');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = config;
const uri = `${DB_USER}:${DB_PASSWORD}@${DB_HOST}`;
const client = new MongoClient(uri, { useNewUrlParser: true });

class MongoDB {
    constructor() {}
    connect() {
        return new Promise((resolve, reject) => {
            client.connect(err => {
                if (err) { reject(err); }
                let connection = client.db(DB_NAME);
                resolve(connection);
            });
        });
    }
    get(collection) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                let data = db.collection(collection).find({}).toArray();
                // client.close();
                resolve(data);
            });
        });
    }
    insert(collection, patient) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                let data = db.collection(collection).insertOne(patient);
                console.info("mongoDB: ", data);
                // client.close();
                resolve('ok');
            });
        });
    }
}

module.exports = MongoDB;