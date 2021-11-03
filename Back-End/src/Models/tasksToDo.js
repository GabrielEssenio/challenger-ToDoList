const connection = require('./connection');

const createTask = async ({status, name , done}) => {
const db = await connection();
await db.collection('tasksToDo').insertOne({status, name, done})
}