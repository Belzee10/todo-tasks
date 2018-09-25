import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const tasks = [
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
  },
  {
    id: 3,
    title: "Pay taxes",
    description:
      "nam sem mattis aliquet mus curabitur fermentum dapibus pulvinar, sed molestie per bibendum ut fringilla fusce"
  },
  {
    id: 4,
    title: "Study English",
    description:
      "Urna mattis tristique porttitor dictumst metus congue ac id tempor pellentesque, ridiculus condimentum"
  }
];

ReactDOM.render(<App tasks={tasks} />, document.getElementById("root"));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
