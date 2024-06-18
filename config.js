require('dotenv').config();
const { MongoClient } = require('mongodb');
const mongoDB_url = process.env.MONGODBURL;

const port = process.env.PORT || 3000;
const dbName = process.env.DATABASE_NAME;
const accessToken = process.env.ACCESS_TOKEN;

const userURL = 'http://localhost:3000/';

const getDB = async () => {
    const client = new MongoClient(mongoDB_url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    return client.db(dbName);
};

module.exports = {
    mongoDB_url,
    getDB,
    userURL,
    port,
    accessToken
};