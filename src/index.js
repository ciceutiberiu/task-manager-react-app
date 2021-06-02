import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TaskManagerContextProvider } from "./context/Task-manager-context";

ReactDOM.render(
  <React.StrictMode>
    <TaskManagerContextProvider>
      <App />
    </TaskManagerContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
