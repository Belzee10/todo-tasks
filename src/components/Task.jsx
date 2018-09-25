import React, { Component } from "react";
import { Button, Card, CardBody, CardTitle, CardText, Badge } from "reactstrap";

class Task extends Component {
  state = {
    isTruncated: false
  };

  componentDidMount() {
    this.props.task.description.length > this.props.truncateBy &&
      this.setState({
        isTruncated: true
      });
  }

  handleTruncate = () => {
    this.setState({
      isTruncated: !this.state.isTruncated
    });
  };

  truncate = string => {
    return this.state.isTruncated
      ? string.substring(0, this.props.truncateBy)
      : string;
  };

  render() {
    const { task, index } = this.props;
    const cardStyle = {
      marginBottom: "1rem",
      borderRadius: "2px"
    };
    return (
      <Card style={cardStyle}>
        <CardBody>
          <div className="task-content">
            <CardTitle>
              <span className="text-secondary">#{index + 1}</span> {task.title}
            </CardTitle>
            <CardText>
              {this.truncate(task.description)}{" "}
              {this.state.isTruncated && (
                <Badge
                  color="secondary"
                  title="View more"
                  onClick={this.handleTruncate}
                >
                  ...
                </Badge>
              )}
            </CardText>
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
  }
}

export default Task;
