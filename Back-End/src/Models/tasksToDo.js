const connection = require("./connection");

const createTask = async (status, name, done) => {
  const db = await connection();
  await db.collection("tasksToDo").insertOne({ status, name, done });
};

const getAllTask = async() =>{
  const db = await connection();
  const allTasks = await db.collection('tasksToDo')
  .find()
  .toArray();
  return allTasks;
}

module.exports = { createTask, getAllTask };
