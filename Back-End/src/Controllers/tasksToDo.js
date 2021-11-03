const taskService = require("../Services/tasksToDo");

const createTask = async (req, res) => {
  const { name } = req.body;
  const objTask = {
    name,
    status: "editavel",
    done: false,
  };
  const newTask = await taskService.createTask(objTask);
  res.status(newTask.status).json(newTask.result)
};

const getAllTask = async (_req, res) => {
  const result = await taskService.getAllTask();
  return res.status(200).json(result)
}

module.exports = { createTask, getAllTask };
