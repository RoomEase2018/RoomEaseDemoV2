import React, { Component } from "react";
import Checkbox from "../Components/Checkbox";
import { Card, Button } from "semantic-ui-react";
import FlatButton from 'material-ui/FlatButton';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

class NextTask extends Component {
	render() {
		const { handleIndexButton, handleCompletedCheckbox, task } = this.props;
		task.due_date = new Date(task.due_date);
		return (
			// className="next_task" id="next-task"
			<Card fluid centered>
				<Card.Content>
					<Card.Header>
						Upcoming Task:
					</Card.Header>
					<Card.Meta> {task.is_recurring ? "Recurring Expense" : task.cost > 0 ? "Expense" : "Chore"} </Card.Meta>
				</Card.Content>
				<Card.Content textAlign="center">
					<Card.Description>
						<h3 style={{display: "inline", marginRight: "1em"}}>{`${task.title}: Due ${months[task.due_date.getMonth()]} ${task.due_date.getDate()}, ${task.due_date.getFullYear()}`}</h3>
						{/* <Checkbox handleCompletedCheckbox={handleCompletedCheckbox} /> */}
						<h4>{`${task.karma} Karma Points`}</h4>
					</Card.Description>
					<Card.Description>
						<h5>{task.message ? `Message: ${task.message}` : ""}</h5>
					</Card.Description>
					<br />
					<Checkbox handleCompletedCheckbox={handleCompletedCheckbox} />
				</Card.Content>
				
				<Card.Content extra textAlign="center">
					{/* <div className='ui two buttons'>
						<Button basic fluid={false} color='grey' value='previous' onClick={handleIndexButton}>Back</Button>
						<Button basic fluid={false} color='green'value='next' onClick={handleIndexButton}>Next</Button>
					</div> */}
					<FlatButton value='previous' onClick={handleIndexButton}>Back</FlatButton>
					<FlatButton value='previous' onClick={handleIndexButton} backgroundColor="#00E676">Next</FlatButton>
				</Card.Content>
			</Card>
		)
	}

}

export default NextTask;