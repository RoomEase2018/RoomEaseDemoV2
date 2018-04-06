import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionDone from 'material-ui/svg-icons/action/done';

class Checkbox extends Component {

	render() {
		return (
			<RaisedButton
				label="Complete"
				labelColor="#FFF"
				icon={<ActionDone />}
				backgroundColor="#00E676"
				onClick={this.props.handleCompletedCheckbox}
			/>
		)
	}
}


export default Checkbox;