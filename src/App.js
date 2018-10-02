import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Tasks from "./components/Tasks";
import SearchBox from "./components/SearchBox";
import NewTask from "./components/NewTask";
import defaultTasks from "./tasks";

class App extends Component {
  state = {
    tasks: defaultTasks,
    searchTerm: "",
    newTaskShow: false
  };

  showNewTask = () => {
    !this.state.newTaskShow &&
      this.setState({
        newTaskShow: true
      });
  };

  hideNewTask = () => {
    this.state.newTaskShow &&
      this.setState({
        newTaskShow: false
      });
  };

  handleAddTask = task => {
    let { tasks } = this.state;
    tasks.unshift(task);
    this.setState({
      tasks
    });
  };

  handleDeleteTask = id => {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks });
  };

  handleEditTask = taskToEdit => {
    const { tasks } = this.state;
    tasks.forEach((task, index) => {
      task.id === taskToEdit.id && tasks.splice(index, 1, taskToEdit);
    });
    this.setState({
      tasks
    });
  };

  handleSearchChange = searchTerm => {
    this.setState({ searchTerm });
  };

  render() {
    const { tasks, newTaskShow, searchTerm } = this.state;
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h1
              className="text-center display-4"
              style={{ fontSize: "2rem", marginBottom: "2rem" }}
            >
              Todo tasks
            </h1>
            <Button color="primary" size="sm" onClick={this.showNewTask}>
              New task
            </Button>
            {newTaskShow && (
              <NewTask
                onClose={this.hideNewTask}
                addTask={this.handleAddTask}
              />
            )}
            <hr />
            <div className="search-container">
              <SearchBox
                searchTerm={searchTerm}
                onChange={this.handleSearchChange}
              />
            </div>
            <Tasks
              tasks={tasks}
              deleteTask={this.handleDeleteTask}
              editTask={this.handleEditTask}
              searchTerm={searchTerm}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
