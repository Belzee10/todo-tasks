import React from "react";
import { Form, FormGroup, Input } from "reactstrap";

const SearchBox = () => {
  return (
    <Form>
      <FormGroup>
        <Input
          type="search"
          name="search"
          id="search"
          bsSize="sm"
          placeholder="search"
        />
      </FormGroup>
    </Form>
  );
};

export default SearchBox;
