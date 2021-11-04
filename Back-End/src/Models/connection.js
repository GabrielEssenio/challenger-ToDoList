// const {
//   MongoClient
// } = require('mongodb');

// const OPTIONS = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// const MONGO_DB_URL = 'mongodb://localhost:27017/tasksToDo';

// const DB_NAME = 'tasksToDo';

// let db = null;

// const connection = () => (db ?
//   Promise.resolve(db) :
//   MongoClient.connect(MONGO_DB_URL, OPTIONS)
//   .then((conn) => {
//     db = conn.db(DB_NAME);
//     return db;
//   }));

// module.exports = {
//   connection
// };


const { MongoClient } = require('mongodb');
require('dotenv').config();

let schema = null;

async function connection() {
  if (schema) return Promise.resolve(schema);
  return MongoClient
    .connect('mongodb://localhost:27017/tasksToDo' , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(process.env.DB_NAME))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema;
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

module.exports = connection;
