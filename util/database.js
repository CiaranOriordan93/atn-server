const mongodb = require('mongodb');
const secrets = require("../secrets");

const MongoClient = mongodb.MongoClient;
const secret = secrets.db;

let _db;

const mongoConnect = callback => {
    MongoClient.connect(`mongodb+srv://CiaranO:${secret}@cluster0.vmnvr.mongodb.net/bookings?retryWrites=true&w=majority`)
        .then(client => {
            _db = client.db();
            callback();
        }).catch(error => {
            console.log(error);
            throw error;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

