import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class EditTask extends Component {
  state = {
    id: this.props.task.id,
    title: this.props.task.title,
    description: this.props.task.description
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { id, title, description } = this.state;
    const task = {
      id,
      title,
      description
    };
    this.props.editTask(task);
  }

  handleChange = (inputField, event) => {
    this.setState({
      [inputField]: event.target.value
    });
  };

  render() {
    return (
      <div className="edit-task">
        <div className="row">
          <div className="col-lg-6">
            <h5>Edit Task</h5>
            <Form onSubmit={this.handleSubmit}>
              <div className="form-container">
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    defaultValue={this.state.title}
                    onChange={e => this.handleChange("title", e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    defaultValue={this.state.description}
                    onChange={e => this.handleChange("description", e)}
                  />
                </FormGroup>
              </div>
              <FormGroup>
                <Button
                  outline
                  color="warning"
                  size="sm"
                  style={{ marginRight: ".5rem" }}
                >
                  Edit
                </Button>
                <Button
                  outline
                  color="secondary"
                  size="sm"
                  onClick={this.props.onClose}
                >
                  Cancel
                </Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditTask;
