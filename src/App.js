import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Tasks from "./components/Tasks";
import SearchBox from "./components/SearchBox";
// import

class App extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    this.setState({
      tasks: this.props.tasks
    });
  }

  render() {
    const { tasks } = this.state;
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
            <Button color="primary" size="sm">
              New task
            </Button>
            <hr />
            <div className="search-container">
              <SearchBox />
            </div>
            <Tasks tasks={tasks} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
