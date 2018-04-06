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

  	this.apartmentKarma = 0;
  }

  render() {
  	console.log(this.props.completedTasks)
  	if (this.props.completedTasks.length) {
  		this.apartmentKarma = this.props.completedTasks.reduce((acc, el) => {
  			console.log(acc.karma, el.karma)
  			return acc + el.karma;
  		}, this.props.completedTasks[0].karma)
  	}
    return (
      <div>
      	<h1>total karma: {this.apartmentKarma}</h1>
				{this.props.goals.map(goal => (
					<div>
						<div>{goal.title}</div>
						<div>Karma Needed: {goal.karma}</div>
					</div>
				))}      	
      </div>
    );
  }
}

export default connect(mapStateToProps)(ApartmentGoals);