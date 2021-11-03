const express = require("express");
const app = express();
require("dotenv").config();
const tasksRouter = require("./src/routers/tasksRouter");
const PORT = process.env.PORT || 8080;
app.use(express.json);

//TASK
app.use("/user", tasksRouter);

app.get("/", (_req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
