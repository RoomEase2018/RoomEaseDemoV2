import React, { Component } from "react";
import Checkbox from "../Components/Checkbox";
import { Card, Button } from "semantic-ui-react";
import FlatButton from 'material-ui/FlatButton';

class NextTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sortedTasks: props.sortedTasks,
            currentIndex: 0
        }
    }

    handlePrevButton = e => {
        let index = (this.state.currentIndex - 1) % 5
        this.setState({
            currentIndex: index
        })
    }

	handleNextButton = e => {
		let index = (this.state.currentIndex + 1) % 5;
		this.setState({
			currentIndex: index
		})
	}

	render() {
		const { handleIndexButton, handleCompletedCheckbox, task } = this.props;
		console.log(task);
		return (
			// <div className="next_task" id="next-task">
			// 	<div>
			// 		<span>{task.title}</span>
			// 		<span>{task.karma}</span>
			// 	</div>
			// 	<button value='previous' onClick={handleIndexButton}>←</button>
			// 	<button value='next' onClick={handleIndexButton}>→</button>
			// </div>
			<Card fluid centered>
				<Card.Content>
					<Card.Header>
						Upcoming Task:
					</Card.Header>
					<Card.Meta> Type of task </Card.Meta>
				</Card.Content>
				<Card.Content textAlign="center">
					<Card.Description>
						<h2 style={{display: "inline", marginRight: "1em"}}>{`${task.title}: ${task.karma} Karma Points`}</h2>
						<Checkbox handleCompletedCheckbox={handleCompletedCheckbox} />
					</Card.Description>
					<Card.Description>
						{`Message: ${task.message}`}
					</Card.Description>
				</Card.Content>
				<Card.Content extra textAlign="right">
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

export default NextTask