import React, { useContext } from "react";

import TaskContext from "../context/TaskContext";

const CreateTask = () => {
  const { status, setStatus, handleSelect } = useContext(TaskContext);

  return (
    <div className="card green">
      <h2>Nova Tarefa</h2>
      <input type="text" placeholder="Descreva sua Tarefa" />
      <select value={status} OnChange={handleSelect}>
        <option value="pendente">Pendente</option>
        <option value="andamento">Andamento</option>
        <option value="pronto">Pronto</option>
      </select>
      <button>Enviar</button>
    </div>
  );
};

export default CreateTask;
