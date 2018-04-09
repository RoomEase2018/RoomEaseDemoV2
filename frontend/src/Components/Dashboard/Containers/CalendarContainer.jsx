import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import BigCalendar from "react-big-calendar";
import { Grid } from "semantic-ui-react";
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


  eventStyleGetter = (event, start, end, isSelected) => {
    let backgroundColor = '#3474aa';
    if (event.cost > 0) {
      backgroundColor = 'darkgreen';
    }
    
    var style = {
        backgroundColor: backgroundColor,
        borderRadius: '5px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block',
        lineHeight: "2em",
        margin: "0 0 10px"
    };
    return {
        style: style
    };
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
          end: new Date(task.due_date),
          cost: task.cost
        })
      })
      return (
        <Grid.Column className='calendar'>
          <BigCalendar
            events={events}
            views={["week", "month"]}
            defaultView={"week"}
            step={60}
            showMultiDayTimes
            defaultDate={new Date()}
            eventPropGetter={this.eventStyleGetter}
          />
        </Grid.Column>  
      );
    }
  }
}

export default connect(mapStateToProps)(Calendar);