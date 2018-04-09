import React, { Component } from "react";
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

    this.state = {
      apartmentKarma: 343,
      display: ""
    };
  }

  handleRedeem = e => {
    let { apartmentKarma } = this.state;
    if (e.target.name === "0") {
      this.setState({
        apartmentKarma: apartmentKarma - e.target.value,
        display: "none"
      });
    }
  };

  render() {
    const { handleRedeem } = this;
    const { apartmentKarma, goalRedeemed } = this.state;
    if (this.props.completedTasks.length) {
      this.apartmentKarma = this.props.completedTasks.reduce((acc, el) => {
        return acc + el.karma;
      }, this.props.completedTasks[0].karma);
    }
    return (
      <div>
        <h3>Total karma: {apartmentKarma}</h3>
        {this.props.goals.map((goal, index) => (
          <div style={{ display: `${this.state.display}` }}>
            <div>{goal.title}</div>
            <div>Karma Needed: {goal.karma}</div>
            <button name={index} value={goal.karma} onClick={handleRedeem}>
              Redeem
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ApartmentGoals);
