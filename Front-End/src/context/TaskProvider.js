import React, { useState, useEffect } from "react";
import TaskContext from "./TaskContext";

const TasksProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [allTask, setAllTask] = useState([]);
  const [token, setToken] = useState("");

  const handleChange = ({ target: { type, value } }) => {
    setUser({
      ...user,
      [type]: value,
    });
  };

  const context = {
    setAllTask,
    user,
    allTask,
    setUser,
    handleChange,
    token,
    setToken,
  };

  return (
    <TaskContext.Provider value={context}>{children}</TaskContext.Provider>
  );
};
export default TasksProvider;
