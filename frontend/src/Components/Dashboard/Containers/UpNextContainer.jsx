import React, { Component } from "react";
import { connect } from "react-redux";
import Progressbar from "../Components/Progressbar";
import { Grid } from "semantic-ui-react";
import CircularProgress from 'material-ui/CircularProgress';
import NextTask from "../Components/NextTask";
import axios from "axios";

import { updateSortedTasks, setSortedTasks, pushSuccessQueryArray } from "../Actions/DashboardActions";

const mapDispatchToProps = dispatch => {
  return {
    updateSortedTasks: (arr, arr_type, index) => {
      dispatch(updateSortedTasks(arr, arr_type, index));
    },
    setSortedTasks: (arr) => {
      dispatch(setSortedTasks(arr));
    },
    pushSuccessQueryArray: (str) => {
      dispatch(pushSuccessQueryArray(str))
    }
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.Dashboard.tasks,
    recurringTasks: state.Dashboard.recurringTasks,
    sortedTasks: state.Dashboard.sortedTasks,
    goals: state.Dashboard.goals,
    successQueries: state.Dashboard.successQueries
  };
};

class UpNextContainer extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
    }
  }

  // GOOD
  handleCompletedCheckbox = () => {
    this.props.updateSortedTasks(this.state.index);
  }

  // GOOD
  sortTasks = () => {
    let tasksArray = [];

    const { tasks, recurringTasks, setSortedTasks } = this.props;

    tasksArray = [...tasks, ...recurringTasks];
  
    tasksArray.sort((a, b) => {
      return new Date(a.due_date) - new Date(b.due_date);
    })
    return tasksArray;

  }

  // GOOD
  handleIndexButton = e => {
    let newIndex;
    const len = this.props.sortedTasks.length;
    const { index } = this.state;
    if (len > 5) {
      if (e.target.value === 'next') {
        newIndex = (5 + index + 1) % 5;
      } else {
        newIndex = (5 + index - 1) % 5;
      }
    } else {
      if (e.target.value === 'next') {
        newIndex = index + (len - index + 1) % len;
      } else {
        newIndex = index + (len - index - 1) % len;
      }
    }

    this.setState({
      index: newIndex
    })
  }

  render() {
    const { successQueries, sortedTasks } = this.props;
    console.log(sortedTasks, this.state.index)
    if ( !successQueries.fetchAllActiveTasks ||
      !successQueries.fetchAllActiveRecurringTasks ||
      !successQueries.fetchAllApartmentGoals 
      ) {
      return (<div className="up_next"><p>loading</p></div>)
    } 
    else if (!successQueries.pushSuccessQueryArray) {
      this.props.pushSuccessQueryArray('pushSuccessQueryArray');
      this.props.setSortedTasks(this.sortTasks());
      return (<div>loading</div>)
    }
    else {
      const { index } = this.state;
      // console.log(this.state, this.sortedTasks)
      return (
        // className="up_next"
        <Grid.Row>
          <Grid.Column width={2}>
            <Progressbar karma={this.sortedTasks[index].karma} />
          </Grid.Column>
          <Grid.Column width={11}>
            <NextTask 
              task={this.sortedTasks[index]} 
              handleIndexButton={this.handleIndexButton}
              handleCompletedCheckbox={this.handleCompletedCheckbox} 
            />
          </Grid.Column>
        </Grid.Row>
      ); 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpNextContainer);