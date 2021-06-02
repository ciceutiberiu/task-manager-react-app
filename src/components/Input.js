import React, { useContext } from "react";
import { TaskManagerContext } from "../context/Task-manager-context";
import styled from "styled-components";

const Input = () => {
  const { text, updateText, addTask, clearTasks } =
    useContext(TaskManagerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          className="input-form"
          type="text"
          name="text"
          placeholder="Add new task"
          value={text}
          onChange={updateText}
          required
        />
        <div className="btns-container">
          <button type="submit" className="submit-btn">
            Add Task
          </button>
          <button type="button" className="submit-btn" onClick={clearTasks}>
            Clear
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .input-form {
    width: 80%;
    padding: 5px 10px;
    margin: 1.25rem auto 1rem auto;
    border-radius: 10px;
    border: none;
    display: flex;
    font-size: 1.1rem;
  }

  .input-form:focus {
    outline: 0;
  }

  .btns-container {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    padding: 5px 10px;
  }

  .submit-btn {
    padding: 5px 15px;
    border-radius: 10px;
    border: transparent;
    cursor: pointer;
  }
`;

export default Input;
