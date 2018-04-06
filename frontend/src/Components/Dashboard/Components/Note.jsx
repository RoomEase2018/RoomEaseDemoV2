import React, { Component } from 'react';
import Draggable from 'react-draggable';
import '../Styles/Dashboard.css'

// bulletin board width + height needs to be fixed (define width + height)
// props = message + removeNote function + index

class Note extends Component {
	
	hideNote = () => {
		this.props.hideNote(this.props.index)
	}

	render() {
		const { message, index } = this.props;

		if (message === null) {
			return (
				<Draggable onStart={() => true}>
					<div className='note invisible'>
						<p>{message}</p>
						{/* <button onClick={this.hideNote}>delete</button> */}
					</div>
				</Draggable>
			)
		}
		else {
			return (
				<Draggable>
					<div className='note' bounds='parent'>
						<p>{message}</p>
						{/* <button onClick={this.hideNote}>delete</button> */}
					</div>
				</Draggable>
			)
		}
	}
}

export default Note;
