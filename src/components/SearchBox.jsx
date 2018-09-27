import React, { Component } from "react";
import { Form, FormGroup, Input } from "reactstrap";

class SearchBox extends Component {
  onChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Input
            value={this.props.searchTerm}
            onChange={this.onChange}
            type="search"
            name="search"
            id="search"
            bsSize="sm"
            placeholder="search"
          />
        </FormGroup>
      </Form>
    );
  }
}

export default SearchBox;
