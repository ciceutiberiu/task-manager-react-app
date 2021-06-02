import React, { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";
import { TaskManagerContext } from "../context/Task-manager-context";

const TaskItem = ({ task }) => {
  const { id, title } = task;
  const { deleteTask } = useContext(TaskManagerContext);

  return (
    <Wrapper>
      <li className="list-item">
        <span>{title}</span>
        <div className="button-container">
          <button type="button" className="icon" onClick={() => deleteTask(id)}>
            <FaTrash />
          </button>
        </div>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 1.2rem;
    }
  }

  .icon {
    font-size: 1.1rem;
    margin-left: 1rem;
    border: transparent;
    cursor: pointer;
    padding: 3px 5px;
    background: transparent;
  }
`;

export default TaskItem;
