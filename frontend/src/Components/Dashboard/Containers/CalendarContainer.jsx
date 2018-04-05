import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import BigCalendar from "react-big-calendar";
import styles from "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const mapStateToProps = state => {
  return {
    sortedTasks: state.Dashboard.sortedTasks,
  };
};

class Calendar extends Component {
  constructor() {
    super();
  }

  render() {
    const { events } = this.props.sortedTasks;
    if (this.props.sortedTasks.length === 0) {
      return (
        <div>loading</div>
      )
    } 
    else {
      const events = [];
      this.props.sortedTasks.forEach(task => {
        events.push({
          title: task.title,
          allDay: true,
          start: new Date(task.due_date),
          end: new Date(task.due_date)
        })
      })
      return (
        <div className='calendar' >
          <BigCalendar
            events={events}
            views={["week", "month", "agenda"]}
            defaultView={"week"}
            step={60}
            showMultiDayTimes
            defaultDate={new Date()}
          />
        </div>  
      );
    }
  }
}

export default connect(mapStateToProps)(Calendar);