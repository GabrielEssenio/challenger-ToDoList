const express = require("express");
const app = express();
require("dotenv").config();
const tasksRouter = require("./src/routers/tasksRouter");
const usersRouter = require("./src/routers/usersRouter");
const loginRouter = require("./src/routers/loginRouter");
const PORT = process.env.PORT || 8080;
app.use(express.json());

//TASK
app.use("/task", tasksRouter);
//USER
app.use("/user", usersRouter);
//LOGIN
app.use("/login", loginRouter);

app.get("/", (_req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
