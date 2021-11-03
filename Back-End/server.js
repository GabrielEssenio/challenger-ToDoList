const express = require("express");
const app = express();
const taskController = require("./src/Controllers/tasksToDo");

app.use(express.json);
const PORT = process.env.PORT || 8080;

//TASK
app.post("/tasks", taskController.createTask);

app.get('/', (req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
