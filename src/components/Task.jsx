import React from "react";
import { Button, Card, CardText, CardBody, CardTitle } from "reactstrap";

const Task = props => {
  const { task } = props;
  const cardStyle = {
    marginBottom: "1rem",
    borderRadius: "2px"
  };

  return (
    <Card style={cardStyle}>
      <CardBody>
        <div className="task-content">
          <CardTitle>
            <span className="text-secondary">#{task.id} </span>
            {task.title}
          </CardTitle>
          <CardText>{task.description}</CardText>
        </div>
        <div className="task-actions">
          <Button color="warning" size="sm">
            Edit
          </Button>
          <Button color="danger" size="sm">
            Delete
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Task;
