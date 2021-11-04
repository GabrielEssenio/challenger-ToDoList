const connection = require("./connection");

const createTask = async (description, userId) => {
  const db = await connection();
  const newTask = await db.collection("tasksToDo").insertOne({
    description,
    status: "editavel",
    done: false,
    userId,
  });
  return {
    id: newTask.insertedId,
    description,
    status: "editavel",
    done: false,
    userId,
  };
};

const getAllTaskByUser = async (userId) => {
  const db = await connection();
  const allTasks = await db.collection("tasksToDo").find({ userId }).toArray();
  return allTasks;
};

const updateTaskByUser = async (userId, description) => {
  const db = await connection();
  const updateTask = await db
    .collection("tasksToDo")
    .findOneAndUpdate({ userId, description }, { description });
  return updateTask.value;
};

const verifyDuplicate = async (description) =>{
  const db = await connection();
  const duplicate = await db.collection("tasksToDo").findOne({ description })
  return duplicate !== null;
}

module.exports = { createTask, getAllTaskByUser, updateTaskByUser, verifyDuplicate };
