const taskService = require("../Services/tasksToDo");

const createTask = async (req, res) => {
  const { description } = req.body;
  const { id: userId } = req.user;
  console.log(req.user);
  const newTask = await taskService.createTask(description, userId);
  res.status(newTask.status).json(newTask.message);
};

const getAllTaskByUser = async (req, res) => {
  const { id: userId } = req.user;
  // console.log(userId);
  const result = await taskService.getAllTaskByUser(userId);
  return res.status(result.status).json(result.message);
};

const updateTaskByUser = async (req, res) => {
  const { id: userId } = req.user;
  const { description } = req.body;
  const updateTask = await taskService.updateTaskByUser(userId, description);
  return res.status(updateTask.status).json(updateTask.message);
};

module.exports = { createTask, getAllTaskByUser, updateTaskByUser };
