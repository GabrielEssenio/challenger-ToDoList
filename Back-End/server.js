const express = require("express");
const app = express();
require("dotenv").config();
const tasksRouter = require("./src/routers/tasksRouter");
const usersRouter = require("./src/routers/usersRouter");
const loginRouter = require("./src/routers/loginRouter");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

//LOGIN
app.use("/", loginRouter);
//TASK
app.use("/task", tasksRouter);
//USER
app.use("/user", usersRouter);

app.get("/", (_req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
