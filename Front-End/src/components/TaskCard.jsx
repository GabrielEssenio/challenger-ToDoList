import React, { useState } from "react";
import TaskListCard from "./TaskListCard"

const TaskCard = ({tasks}) => {
  const { done ,description, status} = tasks;
   return (
    <div className="row">
      {tasks.map((task) => {
        return <TaskListCard allTask={task}/>
      })}
    </div>
  );
};

export default TaskCard;
