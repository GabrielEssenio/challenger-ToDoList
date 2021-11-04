import React, { useState, useEffect } from "react";
import TaskContext from "./TaskContext";
import getTask from "../APIs/GetTasks";

const TasksProvider = ({ children }) => {
  const [newuser, setNewUser] = useState([]);
  const [allTask, setAllTask] = useState([]);

    const getTasks = async () => {
      const getTasks = await getTask();
      await setAllTask(getTasks);
    };

  const context = {
    setAllTask,
    setNewUser,
    allTask,
    newuser,
    getTasks,
  };

  return (
    <TaskContext.Provider
      value={ context }
    >
      {children}
    </TaskContext.Provider>
  );

};
export default TasksProvider;
