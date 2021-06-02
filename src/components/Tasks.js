import React, { useContext } from "react";
import { TaskManagerContext } from "../context/Task-manager-context";
import TaskItem from "./TaskItem";
import styled from "styled-components";

const Tasks = () => {
  const { allTasks } = useContext(TaskManagerContext);

  if (allTasks.length === 0) {
    return (
      <div className="tasks-empty">
        <h3>You currently don't have any tasks</h3>
      </div>
    );
  }

  return (
    <Wrapper>
      {allTasks.map((item) => {
        return (
          <ul className="list" key={item.id}>
            <TaskItem task={item} />
          </ul>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .list {
    list-style-type: none;
    width: 80%;
    margin: 1.25rem auto;
  }
`;

export default Tasks;
