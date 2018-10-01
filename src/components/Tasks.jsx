import React, { Component } from "react";
import Task from "./Task";

class Tasks extends Component {
  filterTasks = () => {
    const tasks = [];
    this.props.tasks.forEach((task, index) => {
      task.title.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) !==
        -1 &&
        tasks.push(
          <Task
            task={task}
            truncateBy={100}
            key={task.id}
            index={index}
            deleteTask={this.props.deleteTask}
            editTask={this.props.editTask}
          />
        );
    });
    return tasks;
  };

  render() {
    return <div>{this.filterTasks()}</div>;
  }
}

export default Tasks;
