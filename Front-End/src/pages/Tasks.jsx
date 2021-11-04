import React, { useEffect, useContext } from "react";
import HeaderTask from "../components/HeaderTask";
import TaskCard from "../components/TaskCard";
import TaskContext from "./TaskContext";

const URL = "http://localhost:8080/task";

const Tasks = () => {
  const { setAllTask, allTask,getTasks } = useContext(TaskContext);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <HeaderTask />
      <h1>Minhas Tarafas</h1>
      <TaskCard tasks={allTask} />
    </div>
  );
};

export default Tasks;
