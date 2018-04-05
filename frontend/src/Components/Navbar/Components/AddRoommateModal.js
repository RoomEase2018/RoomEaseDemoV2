import React from "react";
import { Modal, Dropdown, Icon } from "semantic-ui-react";
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ActionDone from 'material-ui/svg-icons/action/done';
import { orange500, blue500 } from 'material-ui/styles/colors';
import "../Styles/ModalStyles.css";

const styles = {
    errorStyle: {
        color: "#C62828",
    },
    floatingLabelFocusStyle: {
        color: "#A2DEFD",
    },
};

class AddRoommateModal extends React.Component {
    render() {
        const { active, handleClose, handleSubmit } = this.props;
        return (
            <div className="modal" onClick={handleClose}>
                <Paper className="form" zDepth={2}>
                    <Dropdown 
                        placeholder='Search Roommate' 
                        search
                        fluid
                    />
                    <br />
                    <TextField
                      name="description"
                      hintText="Send a message"
                      floatingLabelText="Message"
                      errorStyle={styles.errorStyle}
                      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    />
                    <br />
                    <RaisedButton
                        name="addRoommate"
                        label="Submit"
                        labelColor="#FFF"
                        icon={<ActionDone />}
                        backgroundColor="#00E676"
                        // onClick={handleSubmit}
                    />
                </Paper>
            </div>
        );
    }
}

export default AddRoommateModal;