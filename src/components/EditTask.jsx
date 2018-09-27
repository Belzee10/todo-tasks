import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.input.current.value);
    event.preventDefault();
  }

  render() {
    const { task } = this.props;
    return (
      <div className="edit-task">
        <Form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                // defaultValue={task.title}
                ref={this.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                // defaultValue={task.description}
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
    );
  }
}

export default EditTask;
