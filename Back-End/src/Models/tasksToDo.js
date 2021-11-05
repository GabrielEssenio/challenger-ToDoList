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

const verifyDuplicate = async (description) => {
  const db = await connection();
  const duplicate = await db.collection("tasksToDo").findOne({ description });
  return duplicate !== null;
};

const findTaskByUser = async (userId, id) => {
  const db = await connection();
  const findUser = await db.collection("tasksToDo").find({ userId }).toArray();
  const findTask = findUser.filter((task) => id == task.id);
  return findTask !== null;
};

const deleteTaskByUser = async (userId, id) => {
  const db = await connection();
  const deleteTask = await db
    .collection("tasksToDo")
    .findOneAndUpdate({ userId, id });
  return deleteTask.value;
};

module.exports = {
  createTask,
  getAllTaskByUser,
  updateTaskByUser,
  verifyDuplicate,
  findTaskByUser,
  deleteTaskByUser
};
