import React, { useState } from "react";

const TaskCard = ({tasks}) => {
  const { done } = tasks;
  const [checkDone, setCheckDone] = useState(done);

  return (
    <div>
      {tasks.map(({ description, status, _userId }, index) => {
        return (
          <div>
            <title>{`Tarefa ${index}`}</title>
            <input
              type="checkbox"
              checked={checkDone}
              onChange={() => setCheckDone(!checkDone)}
            />
            <h2>{description}</h2>
            <h3>{status}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default TaskCard;
