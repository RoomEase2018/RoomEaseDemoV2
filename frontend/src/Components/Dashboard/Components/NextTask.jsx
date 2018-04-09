import React, { Component } from "react"
import Checkbox from "../Components/Checkbox"
import { Card, Button } from "semantic-ui-react"
import FlatButton from "material-ui/FlatButton"

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
]

class NextTask extends Component {
    render() {
        const { handleIndexButton, handleCompletedCheckbox, task } = this.props
        task.due_date = new Date(task.due_date)
        return (
            // className="next_task" id="next-task"
            <Card
                fluid
                centered
                style={{ padding: "0" }}
                className="upcoming-task-inner">
                <Card.Content className="upcoming-task">
                    <Card.Header className="upcoming-task-label">
                        Upcoming Task:
                    </Card.Header>
                    <Card.Meta>
                        {" "}
                        {task.is_recurring
                            ? "Recurring Expense"
                            : task.cost > 0 ? `Expense: Due ${
                              months[task.due_date.getMonth()]
                            } ${task.due_date.getDate()}, ${task.due_date.getFullYear()}` : `Chore: Due ${
                              months[task.due_date.getMonth()]
                            } ${task.due_date.getDate()}, ${task.due_date.getFullYear()}`}{" "}
                    </Card.Meta>
                </Card.Content>
                <Card.Content
                    textAlign="center"
                    className="upcoming-task-description">
                    <Card.Description>
                        <h3
                            style={{
                                display: "inline"
                            }}>{`${task.title}`}</h3>
                        {/* <Checkbox handleCompletedCheckbox={handleCompletedCheckbox} /> */}
                        <h4>{`${task.karma} Karma Points`}</h4>
                    </Card.Description>
                    <br />
                    <Checkbox
                        handleCompletedCheckbox={handleCompletedCheckbox}
                    />
                </Card.Content>

                <Card.Content
                    extra
                    textAlign="center"
                    style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                    <FlatButton
                        value="previous"
                        onClick={() => handleIndexButton('previous')}
                        style={{
                            backgroundColor: "#00E676",
                            color: "white",
                            fontSize: "18px"
                        }}>
                        Back
                    </FlatButton>
                    <FlatButton
                        value="next"
                        onClick={() => handleIndexButton('next')}
                        style={{
                            marginLeft: "950px",
                            backgroundColor: "#00E676",
                            fontSize: "18px",
                            color: "white"
                        }}>
                        Next
                    </FlatButton>
                </Card.Content>
            </Card>
        )
    }
}

export default NextTask
