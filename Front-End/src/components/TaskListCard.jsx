import React, { useContex, useState } from "react";

// import TaskContext from "../context/TaskContext";

const TaskListCard = ({ allTask }) => {
  const {description, done, status, } = allTask

  console.log(allTask);
  const [checkDone, setCheckDone,handleSelect] = useState(done);

  return (
    <div className="card blue">
      <input
        type="checkbox"
        checked={checkDone}
        onChange={() => setCheckDone(!checkDone)}
      />
      <h2>{description}</h2>
      <select value={status} OnChange={handleSelect}>
        <option name="pendente" value="pendente">Pendente</option>
        <option name="andamento" value="andamento">Andamento</option>
        <option name="pronto" selected value="pronto">
          Pronto
        </option>
      </select>
      <button>Apagar🗑️</button>
    </div>
  );
};

export default TaskListCard;
