import React, { Component } from "react"
import { connect } from "react-redux"
import Note from "../Components/Note"
import { fetchAllVisibleNotes } from "../Actions/DashboardActions"

const mapStateToProps = state => {
    return {
        notes: state.Dashboard.notes
    }
}

const legend = {
    width: '200px',
    height: '200px',
    backgroundColor: '#77add7',
    position: 'absolute',
    top: '24px',
    right: '25px'
}

const noteStyle = [
    { top: '266px', left: '222px', fontFamily: "Schoolbell", fontSize: "1.5em", position: 'absolute', backgroundColor: 'pink' },
    { top: '166px', left: '445px', fontFamily: "Schoolbell", fontSize: "1.5em", position: 'absolute', backgroundColor: 'lightblue' },
    { top: '451px', left: '550px', fontFamily: "Schoolbell", fontSize: "1.5em", position: 'absolute', backgroundColor: 'violet' },
    { top: '312px', left: '733px', fontFamily: "Schoolbell", fontSize: "1.5em", position: 'absolute', backgroundColor: 'lightpurple' }
]

class Bulletin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: props.notes
        }
    }

    hideNote = index => {
        // this.props.notes[index] = null
        // const notes = this.state.notes;
        // notes[index].message = null;
        // this.setState({
        //   notes: notes
        // });
    }

    render() {
        const { notes } = this.props
        // console.log(notes);
        return (
            <div className="bulletin">
                <h1> Apartment Bulletin </h1>
                <div style={legend}>
                    <p>user1</p>
                    <p>user2</p>
                    <p>user3</p>
                    <p>user4</p>
                    <button>+ note</button>
                </div>
                {notes.map((note, i) => (
                    <Note
                        message={note.message}
                        index={i}
                        key={i}
                        hideNote={this.hideNote}
                        noteStyle={noteStyle[i]}
                    />
                ))}
            </div>
        )
    }
}
export default connect(mapStateToProps)(Bulletin)