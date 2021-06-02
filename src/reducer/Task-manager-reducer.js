import { ADD_TASK, CLEAR_TASKS, DELETE_TASK, UPDATE_TEXT } from "../actions";
import { v4 as uuidv4 } from "uuid";

const task_reducer = (state, action) => {
  if (action.type === UPDATE_TEXT) {
    return { ...state, text: action.payload };
  }
  if (action.type === ADD_TASK) {
    return {
      ...state,
      allTasks: [...state.allTasks, { id: uuidv4(), title: action.payload }],
      text: "",
    };
  }
  if (action.type === DELETE_TASK) {
    const auxTasks = state.allTasks.filter(
      (task) => task.id !== action.payload
    );
    return { ...state, allTasks: auxTasks };
  }
  if (action.type === CLEAR_TASKS) {
    return { ...state, allTasks: [] };
  }
  return state;
};

export default task_reducer;
