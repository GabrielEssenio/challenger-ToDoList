const Joi = require("joi");
const taskModel = require("../Models/tasksToDo");

const createTask = async (description, userId) => {
  const schema = Joi.object({
    description: Joi.string().required(),
  }).validate({ description });
  if (schema.error) return { message: schema.error, status: 401 };
  const validate = await taskModel.createTask(description, userId);
  return { status: 201, message: validate };
};

const getAllTaskByUser = async (userId) => {
  const taskByUser = await taskModel.getAllTaskByUser(userId);
  return { status: 200, message: taskByUser };
};

const updateTaskByUser = async (userId, description) => {
  const updateTask = await taskModel.updateTaskByUser(userId, description);
  return { status: 200, message: updateTask };
};

module.exports = { createTask, getAllTaskByUser, updateTaskByUser };
