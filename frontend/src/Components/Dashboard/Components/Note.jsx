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
		const { message, index, noteStyle } = this.props;

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
					<div className='note' bounds='parent' style={noteStyle}>
						<img src="https://i.imgur.com/hTXnzMG.png" height="25px"/>            
						<p>{message}</p>
						{/* <button onClick={this.hideNote}>delete</button> */}
					</div>
				</Draggable>
			)
		}
	}
}

export default Note;
