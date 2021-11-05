import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TasksProvider from "./context/TaskProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <TasksProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TasksProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
