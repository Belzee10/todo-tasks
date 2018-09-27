import React from "react";
import Task from "./Task";

const Tasks = props => {
  return (
    <div>
      {props.tasks.map((task, index) => (
        <Task
          task={task}
          truncateBy={100}
          key={task.id}
          index={index}
          deleteTask={props.deleteTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
