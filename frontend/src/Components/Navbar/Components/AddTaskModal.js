import React from "react";
import { Modal, Dropdown, Icon } from "semantic-ui-react";
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import ActionDone from 'material-ui/svg-icons/action/done';
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
        color: "#C62828",
    },
    floatingLabelFocusStyle: {
        color: "#A2DEFD",
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

        this.state = {
            apt_id: 1,
            title: '',
            message: '',
            from_user_id: 1,
            to_user_id: 1,
            due_date: new Date(),
            karma: 0,
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDateChange = (e, d) => {
        this.setState({
            due_date: d
        })
    }

    handleSubmit = e => {
        console.log('submitted ', this.state);
        console.log('props: ', this.props.insertIntoSortedTask)
        const { apt_id, title, to_user_id, from_user_id, due_date, karma, message } = this.state;
        this.props.insertIntoSortedTask({
            title: title,
            apt_id: apt_id,
            to_user_id: to_user_id,
            from_user_id: from_user_id,
            due_date: due_date,
            karma: karma,
            message: message
        })
        
        this.props.handleClose();
    }

    handleSelectRoommate = (e, a) => {
        this.setState({
            to_user_id: 1
        })
    }

    render() {
        const { task, roommates, assignedRoommates, handleClose, handleChange, selectedDate, handleDate } = this.props;
        console.log(this.state);
        return (
            <div className="modal" >
                <Paper className="form" zDepth={2}>
                    <Dropdown
                        onChange={handleChange}
                        placeholder='Select task' 
                        fluid selection options={tasks} 
                    />
                    <TextField
                      name="title"
                      // value={task.title}
                      hintText="Enter task"
                      floatingLabelText="Task"
                      onChange={this.handleInputChange}
                      errorStyle={styles.errorStyle}
                      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    />
                    <TextField
                      name="message"
                      // value={task.description}
                      hintText="Enter task description"
                      floatingLabelText="Description"
                      onChange={this.handleInputChange}
                    />
                    <TextField
                      name="karma"
                      hintText="Enter karma value"
                      floatingLabelText="Karma Awarded"
                      onChange={this.handleInputChange}
                    />
                    <br />
                    <DatePicker 
                        hintText="Select a due date"
                        // value={selectedDate}
                        onChange={this.handleDateChange}
                    />
                    <br />
                    <Dropdown 
                        placeholder='Select Roommate' 
                        options={roommates}
                        selection
                        multiple  
                        onChange={this.handleSelectRoommate}
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

export default connect(null, mapDispatchToProps)(AddTaskModal);
