import React from "react";
import { Dropdown } from "semantic-ui-react";
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import "../Styles/ModalStyles.css";

const styles = {
    errorStyle: {
        color: "#C62828",
    },
    floatingLabelFocusStyle: {
        color: "#A2DEFD",
    },
};

const tasks = [
    { key: 1, value: "Take out trash", text: "Take out trash", kp: 5 },
    { key: 2, value: "Clean the dishes", text: "Clean the dishes", kp: 5 },
    { key: 3, value: "Sweep the house", text: "Sweep the house", kp: 10 },
    { key: 4, value: "Clean the kitchen", text: "Clean the kitchen", kp: 15 },
    { key: 5, value: "Mop the floor", text: "Mop the floor", kp: 15 },
    { key: 6, value: "Clean the bathroom", text: "Clean the bathroom", kp: 25 },
];

class AddTaskModal extends React.Component {
    render() {
        const { task, roommates, handleClose, handleChange, selectedDate, handleDate } = this.props;
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
                      errorStyle={styles.errorStyle}
                      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    />
                    <TextField
                      name="description"
                      value={task.description}
                      onChange={handleChange}
                      hintText="Enter task description"
                      floatingLabelText="Description"
                      errorStyle={styles.errorStyle}
                      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    />
                    <br />
                    <DatePicker 
                        hintText="Select a due date"
                        value={selectedDate}
                        onChange={handleDate} 

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
                        labelColor="#FFF"
                        icon={<ActionDone />}
                        backgroundColor="#00E676"
                    />
                </Paper>
            </div>
        );
    }
}

export default AddTaskModal;