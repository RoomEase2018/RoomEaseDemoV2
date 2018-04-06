import React, { Component } from "react";
import Checkbox from "../Components/Checkbox";
import { Card, Button } from "semantic-ui-react";
import FlatButton from "material-ui/FlatButton";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

class NextTask extends Component {
  render() {
    const { handleIndexButton, handleCompletedCheckbox, task } = this.props;
    task.due_date = new Date(task.due_date);
    return (
      // className="next_task" id="next-task"
      <Card fluid centered style={{ padding: "0" }}>
        <Card.Content>
          <Card.Header>Upcoming Task:</Card.Header>
          <Card.Meta>
            {" "}
            {task.is_recurring
              ? "Recurring Expense"
              : task.cost > 0 ? "Expense" : "Chore"}{" "}
          </Card.Meta>
        </Card.Content>
        <Card.Content textAlign="center">
          <Card.Description>
            <h3 style={{ display: "inline", marginRight: "1em" }}>{`${
              task.title
            }: Due ${
              months[task.due_date.getMonth()]
            } ${task.due_date.getDate()}, ${task.due_date.getFullYear()}`}</h3>
            {/* <Checkbox handleCompletedCheckbox={handleCompletedCheckbox} /> */}
            <h4>{`${task.karma} Karma Points`}</h4>
          </Card.Description>
          <Card.Description>
            <h5>{task.message ? `Message: ${task.message}` : ""}</h5>
          </Card.Description>
          <br />
          <Checkbox handleCompletedCheckbox={handleCompletedCheckbox} />
        </Card.Content>

        <Card.Content
          extra
          textAlign="center"
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <FlatButton value="previous" onClick={handleIndexButton} style={{backgroundColor:"#00E676", color: "white", fontSize:"18px"}} >
            Back
          </FlatButton>
          <FlatButton
            value="next"
            onClick={handleIndexButton}
            style={{ marginLeft: "900px", backgroundColor: "#00E676", fontSize:"18px", color:"white"}}
          >
            Next
          </FlatButton>
        </Card.Content>
      </Card>
    );
  }
}

export default NextTask;
