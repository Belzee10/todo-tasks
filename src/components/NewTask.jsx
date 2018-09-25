import React, { Component } from "react";
import idGenerator from "react-id-generator";

import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";

class NewTask extends Component {
  state = {
    title: "",
    description: "",
    validate: {
      isFormValid: false,
      title: ""
    }
  };

  validateTitle = e => {
    const { validate } = this.state;
    if (e.target.value.length === 0) {
      validate.title = "invalid";
      validate.isFormValid = false;
    } else {
      validate.title = "valid";
      validate.isFormValid = true;
    }
    this.setState({
      validate
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, description, validate } = this.state;
    if (this.state.validate.isFormValid) {
      const { tasks } = this.props;
      const newTask = {
        id: idGenerator(),
        title: title,
        description: description
      };
      tasks.unshift(newTask);
      this.props.updateTasks(tasks);
    } else {
      validate.title = "invalid";
      this.setState({
        validate
      });
    }
  };

  handleChange = (inputField, e) => {
    this.setState({
      [inputField]: e.target.value
    });
  };

  render() {
    const { validate } = this.state;
    return (
      <div className="newTask-container">
        <Card>
          <CardBody>
            <CardTitle>New task</CardTitle>
            <div>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input
                    valid={validate.title === "valid"}
                    invalid={validate.title === "invalid"}
                    value={this.state.title}
                    onChange={e => {
                      this.handleChange("title", e);
                      this.validateTitle(e);
                    }}
                    type="text"
                    name="title"
                    id="title"
                    placeholder="to do something"
                  />
                  <FormFeedback>This field don't be should empty</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description (optional)</Label>
                  <Input
                    value={this.state.description}
                    onChange={e => this.handleChange("description", e)}
                    type="textarea"
                    name="description"
                    id="description"
                  />
                </FormGroup>
                <FormGroup>
                  <Button
                    disabled={validate.title === "invalid"}
                    outline
                    color="primary"
                    size="sm"
                    style={{ marginRight: ".5rem" }}
                  >
                    Save
                  </Button>
                  <Button
                    outline
                    color="danger"
                    size="sm"
                    onClick={this.props.onClose}
                  >
                    Cancel
                  </Button>
                </FormGroup>
              </Form>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default NewTask;
