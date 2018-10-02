import React from "react";
import { shallow, mount } from "enzyme";
import SearchBox from "../components/SearchBox";

it("should render correctly with props", () => {
  const searchTerm = "go";
  const component = shallow(<SearchBox searchTerm={searchTerm} />);

  expect(component).toMatchSnapshot();
});
