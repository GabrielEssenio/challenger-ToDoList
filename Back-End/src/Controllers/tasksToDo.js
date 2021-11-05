const taskService = require("../Services/tasksToDo");

const createTask = async (req, res) => {
  const { description } = req.body;
  const { id: userId } = req.user;
  const newTask = await taskService.createTask(description, userId);
  res.status(newTask.status).json(newTask.message);
};

const getAllTaskByUser = async (req, res) => {
  const { id: userId } = req.user;
  const result = await taskService.getAllTaskByUser(userId);
  return res.status(result.status).json(result.message);
};

const updateTaskByUser = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const { description } = req.body;
  const updateTask = await taskService.updateTaskByUser(
    userId,
    id,
    description
  );
  return res.status(updateTask.status).json(updateTask.message);
};

const deleteTaskByUser = async (req, res) => {
  const { id } = req.params;

  const { id: userId } = req.user;
  const deleteTask = await taskService.deleteTaskByUser(userId, id);
  return res.status(deleteTask.status).json(deleteTask.message);
};

module.exports = {
  createTask,
  getAllTaskByUser,
  updateTaskByUser,
  deleteTaskByUser,
};
