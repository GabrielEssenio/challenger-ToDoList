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

module.exports = { createTask };
