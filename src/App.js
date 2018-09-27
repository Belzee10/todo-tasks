import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Tasks from "./components/Tasks";
import SearchBox from "./components/SearchBox";
import NewTask from "./components/NewTask";

class App extends Component {
  state = {
    tasks: [],
    searchTerm: "",
    newTaskShow: false
  };

  componentDidMount() {
    this.setState({
      tasks: this.props.tasks
    });
  }

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

  handleUpdate = tasks => {
    this.setState({
      tasks
    });
  };

  handleDeleteTask = id => {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks });
  };

  handleChange = searchTerm => {
    this.setState({ searchTerm });
    console.log(searchTerm);
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
                tasks={tasks}
                updateTasks={() => this.handleUpdate(tasks)}
              />
            )}
            <hr />
            <div className="search-container">
              <SearchBox searchTerm={searchTerm} onChange={this.handleChange} />
            </div>
            <Tasks
              tasks={tasks}
              deleteTask={this.handleDeleteTask}
              searchTerm={searchTerm}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
