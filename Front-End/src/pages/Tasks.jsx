import React, { useEffect, useContext } from "react";
import HeaderTask from "../components/HeaderTask";
import TaskCard from "../components/TaskCard";
import CreateTask from "../components/CreateTask";
import TaskContext from "../context/TaskContext";
import getTask from "../APIs/GetTasks";
import { getFromLocalStorage } from "../helpers/localStorage";

const Tasks = () => {
  const { setAllTask, allTask, token } = useContext(TaskContext);

  useEffect(() => {
    const getTasks = async () => {
      const newToken = getFromLocalStorage('token');
      const getTasks = await getTask(newToken);
      await setAllTask(getTasks);
    };
    getTasks();
  },[]);

  return (
    <div>
      <HeaderTask />
      <h1>Minhas Tarafas</h1>
      <div className="create-task">
      <CreateTask/>
      </div>
      <TaskCard tasks={allTask} />
    </div>
  );
};

export default Tasks;
