import React from "react";
import { Modal, Dropdown, Icon } from "semantic-ui-react";
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import ActionDone from 'material-ui/svg-icons/action/done';
import { orange500, blue500 } from 'material-ui/styles/colors';
import "../Styles/ModalStyles.css";

import { insertIntoSortedTask } from "../../Dashboard/Actions/DashboardActions";

const mapDispatchToProps = dispatch => {
    return {
    insertIntoSortedTask: task => {
      dispatch(insertIntoSortedTask(task));
    }
  }
}

const styles = {
    errorStyle: {
        color: orange500,
    },
    underlineStyle: {
        borderColor: orange500,
    },
    floatingLabelStyle: {
        color: orange500,
    },
    floatingLabelFocusStyle: {
        color: blue500,
    },
};

const tasks = [
    { key: 1, value: "Take out trash", text: "Take out trash", KP: 5 },
    { key: 2, value: "Clean the dishes", text: "Clean the dishes", KP: 5 },
    { key: 3, value: "Sweep the house", text: "Sweep the house", KP: 10 },
    { key: 4, value: "Clean the kitchen", text: "Clean the kitchen", KP: 15 },
    { key: 5, value: "Mop the floor", text: "Mop the floor", KP: 15 },
    { key: 6, value: "Clean the bathroom", text: "Clean the bathroom", KP: 25 },
];

class AddTaskModal extends React.Component {
    constructor() {
        super();


    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDateChange = (e, d) => {
        this.setState({
            date: d
        })
    }

    handleSubmit = e => {
        console.log('submitted')
    }

    render() {
        const { active, task, roommates, assignedRoommates, handleClose, handleChange, selectedDate, handleDate } = this.props;
        console.log(this.state);
        return (
            <div className="modal" onClick={handleClose}>
                <Paper className="form" zDepth={2}>
                    <Dropdown
                        onChange={handleChange}
                        placeholder='Select task' 
                        fluid selection options={tasks} 
                    />
                    <TextField
                      name="title"
                      hintText="Enter task"
                      floatingLabelText="Task"
                      onChange={this.handleChange}
                    />
                    <TextField
                      name="description"
                      value={task.description}
                      onChange={handleChange}
                      hintText="Enter task description"
                      floatingLabelText="Description"
                      onChange={this.handleChange}
                    />
                    <br />
                    <DatePicker 
                        hintText="Select a due date"
                        value={selectedDate}
                        onChange={handleDate}
                        handleDate={this.handleDateChange}
                    />
                    <br />
                    <Dropdown 
                        placeholder='Select Roommate' 
                        options={roommates}
                        selection
                        multiple  
                    />
                    <br />
                    <RaisedButton
                        name="addTask"
                        label="Submit"
                        primary={true}
                        icon={<ActionDone />}
                        onClick={this.handleSubmit}
                    />
                </Paper>
            </div>
        );
    }
}

export default connect(mapDispatchToProps)(AddTaskModal);
