import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    completedTasks: state.Dashboard.completedTasks,
    goals: state.Dashboard.goals
  };
};

class ApartmentGoals extends Component {
  constructor() {
  	super();
		this.apartmentKarma = 120;

		this.redeemGoal = e => {
			console.log(e)
		}
  }

  render() {
  	console.log(this.props.completedTasks)
  	if (this.props.completedTasks.length) {
  		this.apartmentKarma = this.props.completedTasks.reduce((acc, el) => {
  			return acc + el.karma;
  		}, this.props.completedTasks[0].karma)
  	}
    return (
      <div>
      	<h3>Total karma: {this.apartmentKarma}</h3>
				{this.props.goals.map(goal => (
					<div>
						<div>{goal.title}</div>
						<div>Total Karma Needed: {goal.karma}</div>
            <button onClick={this.redeemGoal}>Redeem</button>
					</div>
				))}      	
      </div>
    );
  }
}

export default connect(mapStateToProps)(ApartmentGoals);