import React, { Component } from "react";
import { connect } from "react-redux";
// import {
// 		fetchAllActiveTasks, 
// 		fetchAllActiveRecurringTasks, 
// 		fetchAllVisibleNotes,
// 		fetchAllApartmentGoals,
//     fetchAllCompletedTasks
// 	} from "./Actions/DashboardActions";
import { Grid } from "semantic-ui-react";
import UpNextContainer from "./Containers/UpNextContainer";
import CalendarContainer from "./Containers/CalendarContainer";
import BulletinContainer from "./Containers/BulletinContainer";

// const mapDispatchToProps = dispatch => {
// 	return {
//     fetchAllActiveTasks: aptid => {
//       dispatch(fetchAllActiveTasks(aptid));
//     },
//     fetchAllActiveRecurringTasks: aptid => {
//       dispatch(fetchAllActiveRecurringTasks(aptid));
//     },
//     fetchAllVisibleNotes: aptid => {
//     	dispatch(fetchAllVisibleNotes(aptid));
//     },
//     fetchAllApartmentGoals: aptid => {
//     	dispatch(fetchAllApartmentGoals(aptid));
//     },
//     fetchAllCompletedTasks: aptid => {
//       dispatch(fetchAllCompletedTasks(aptid));
//     }
//   }
// }

// const mapStateToProps = state => {
//   return {
//     tasks: state.App.tasks,
//     recurringTasks: state.App.recurringTasks,
//     notes: state.App.notes,
//     goals: state.App.goals,
//     completedTasks: state.App.completedTasks,
//     successQueries: state.App.successQueries
//   };
// };

class Dashboard extends Component {
	constructor(props) {
		super(props);

		// props.fetchAllActiveTasks(1);
		// props.fetchAllActiveRecurringTasks(1);
		// props.fetchAllVisibleNotes(1);
		// props.fetchAllApartmentGoals(1);
  //   props.fetchAllCompletedTasks(1);
	}

  render() {
    return (
      // <div className="dashboard">
      //   <UpNextContainer />
      //   <CalendarContainer />
      //   <BulletinContainer />
      // </div>
      <Grid className="dashboard" container centered stackable columns="equal" verticalAlign="middle">
          <UpNextContainer />
        <Grid.Row>
          <CalendarContainer />
        </Grid.Row>
        <Grid.Row>
          <BulletinContainer />
        </Grid.Row>
      </Grid>
    );
  }
}

export default Dashboard;

// export default connect(mapStateToProps)(Dashboard);