import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    goals: state.Dashboard.goals
  };
};

class ApartmentGoals extends Component {
  constructor(props) {
  	super(props);
		this.apartmentKarma = 120;

    this.state = {
      goals: [...props.goals]
    }	
  }
  
  redeemGoal = (i, karma) => {
    if (karma < this.apartmentKarma) {
      const newGoal = [...this.state.goals];
      newGoal.splice(i, 1);
      this.apartmentKarma -= karma;
      this.setState({
        goals: newGoal
      })
    }
  }

  render() {
    return (
      <div>
      	<h3>Total karma: {this.apartmentKarma}</h3>
				{this.state.goals.map((goal, i) => (
					<div>
						<div>{goal.title}</div>
						<div>Total Karma Needed: {goal.karma}</div>
            <button onClick={() => this.redeemGoal(i, goal.karma)}>Redeem</button>
					</div>
				))}      	
      </div>
    );
  }
}

export default connect(mapStateToProps)(ApartmentGoals);