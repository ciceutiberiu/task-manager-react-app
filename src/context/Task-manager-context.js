import React, { createContext, useReducer, useEffect } from "react";
import reducer from "../reducer/Task-manager-reducer";
import { UPDATE_TEXT, ADD_TASK, DELETE_TASK, CLEAR_TASKS } from "../actions";

export const TaskManagerContext = createContext();

const getLocalStorage = () => {
  let task = localStorage.getItem("task");

  if (task) {
    return JSON.parse(localStorage.getItem("task"));
  } else {
    return [];
  }
};
const initialState = {
  allTasks: getLocalStorage(),
  text: "",
};

export const TaskManagerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(state.allTasks));
  }, [state.allTasks]);

  const updateText = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_TEXT, payload: value });
  };

  const addTask = (title) => {
    dispatch({ type: ADD_TASK, payload: title });
  };

  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
  };

  const clearTasks = () => {
    dispatch({ type: CLEAR_TASKS });
  };

  return (
    <TaskManagerContext.Provider
      value={{ ...state, updateText, addTask, deleteTask, clearTasks }}
    >
      {children}
    </TaskManagerContext.Provider>
  );
};
