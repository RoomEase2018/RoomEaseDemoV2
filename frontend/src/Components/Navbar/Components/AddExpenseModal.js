import React from "react";
import { Modal, Dropdown, Icon } from "semantic-ui-react";
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import { orange500, blue500 } from 'material-ui/styles/colors';
import "../Styles/ModalStyles.css";

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

class AddExpenseModal extends React.Component {
    render() {
        const { active, roommates, assignedRoommate, handleClose, selectedDate, handleDate, checked, toggleCheckbox } = this.props;
        return (
            <div className="modal" onClick={handleClose}>
                <Paper className="form" zDepth={2}>
                    <TextField
                      name="title"
                      hintText="Add Expense"
                      floatingLabelText="Expense"
                    />
                    <TextField
                      name="description"
                      hintText="Enter expense description"
                      floatingLabelText="Description"
                    />
                    <br />
                    <DatePicker 
                      hintText="Select a due date"
                      value={selectedDate}
                      onChange={handleDate} />
                    <br />
                    <Dropdown 
                      placeholder='Select Roommate' 
                      options={roommates}
                      multiple  
                    />
                    <br />
                    <div style={{ display: "flex", alignItems: "center", width:"10em", marginBottom: "1em"}}>
                        Recurring?
                        <Toggle
                          label={checked ? "Yes" : "No"}
                          labelPosition="right"
                          onClick={toggleCheckbox}
                        />
                    </div>
                    <RaisedButton
                    //   onClick={handleSubmit}
                      label="Submit"
                      primary={true}
                      icon={<ActionDone />}
                    />
                </Paper>
            </div>
        );
    }
}

export default AddExpenseModal;