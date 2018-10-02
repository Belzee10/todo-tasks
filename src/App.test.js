import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import App from "./App";
import Tasks from "./components/Tasks";
import Task from "./components/Task";
import { Button, Badge } from "reactstrap";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Tasks", () => {
  const props = {
    tasks: [
      {
        id: 1,
        title: "Wash the dog",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit, erat curabitur feugiat posuere interdum ullamcorper habitasse"
      },
      {
        id: 2,
        title: "Go for some beers",
        description:
          "duis aenean turpis lobortis molestie proin justo. Conubia blandit aliquam curae nec lacinia vivamus pretium quis"
      }
    ],
    searchTerm: ""
  };
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Tasks {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("should be 2 tasks", () => {
    const wrapper = shallow(<Tasks {...props} />);
    expect(wrapper.find(Task).length).toBe(2);
  });
});

describe("Task", () => {
  const props = {
    task: {
      id: 1,
      title: "Wash the dog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit, erat curabitur feugiat posuere interdum ullamcorper habitasse"
    },
    truncateBy: 100
  };
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Task {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("edit should be toggeable", () => {
    const wrapper = shallow(<Task {...props} />);
    expect(wrapper.state().isEditable).toEqual(false);
    const editButton = wrapper.find(Button).first();
    editButton.simulate("click");
    expect(wrapper.state().isEditable).toEqual(true);
  });
  it("view more should be clicked", () => {
    const wrapper = shallow(<Task {...props} />);
    const badge = wrapper.find(Badge);
    expect(wrapper.state().isTruncated).toEqual(true);
    badge.simulate("click");
    expect(wrapper.state().isTruncated).toEqual(false);
  });
});
