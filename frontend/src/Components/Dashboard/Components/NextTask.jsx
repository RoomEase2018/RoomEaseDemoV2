import React, { Component } from "react";

class NextTask extends Component {
	render() {
		const { handleIndexButton, task } = this.props;
		return (
			<div>
				<p>{task}</p>
				<button value='previous' onClick={handleIndexButton}>prev</button><button value='next' onClick={handleIndexButton}>next</button>
			</div>
		)
	}

}

export default NextTask;