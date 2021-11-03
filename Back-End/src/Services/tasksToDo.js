const Joi = require("joi");
const taskModel = require("../Models/tasksToDo");

const createTask = async (status, name, done) => {
  const schema = Joi.object({
    status: Joi.string().required(),
    name: Joi.string().required(),
    done: Joi.boolean.required(),
  }).validate({ status, name, done });
  if (schema.error) return schema.error;
  return await taskModel.createTask(status, name, done);
};

module.exports = { createTask };
