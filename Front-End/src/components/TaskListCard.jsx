import React, { useContex, useState } from "react";

// import TaskContext from "../context/TaskContext";

const TaskListCard = ({ allTask }) => {
  const {description, done, status, } = allTask

  console.log(allTask);
  const [checkDone, setCheckDone] = useState(done);

  return (
    <div className="card blue">
      <input
        type="checkbox"
        checked={checkDone}
        onChange={() => setCheckDone(!checkDone)}
      />
      <h2>{description}</h2>
      <h3>{status}</h3>
    </div>
  );
};

export default TaskListCard;
