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
    width: "100px",
    height: "160px",
    backgroundColor: "none",
    position: "absolute",
    top: "24px",
    right: "25px",
    border: "5px 5px 5px black"
}

const noteStyle = [
    {
        top: "266px",
        left: "222px",
        fontFamily: "Schoolbell",
        fontSize: "1.5em",
        position: "absolute",
        backgroundColor: "pink"
    },
    {
        top: "166px",
        left: "445px",
        fontFamily: "Schoolbell",
        fontSize: "1.5em",
        position: "absolute",
        backgroundColor: "lightblue"
    },
    {
        top: "451px",
        left: "550px",
        fontFamily: "Schoolbell",
        fontSize: "1.5em",
        position: "absolute",
        backgroundColor: "violet"
    },
    {
        top: "312px",
        left: "733px",
        fontFamily: "Schoolbell",
        fontSize: "1.5em",
        position: "absolute",
        backgroundColor: "#FFFE91"
    }
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
                    <span
                        style={{
                            backgroundColor: "pink",
                            borderRadius: "50px",
                            lineHeight: "1.5em",
                            padding: "0 27px"
                        }}>
                        Aiden
                    </span>
                    <br />
                    <span
                        style={{
                            backgroundColor: "violet",
                            borderRadius: "50px",
                            lineHeight: "1.5em",
                            padding: "0 30px"
                        }}>
                        Ryan
                    </span>
                    <br />
                    <span
                        style={{
                            backgroundColor: "lightblue",
                            borderRadius: "50px",
                            lineHeight: "1.5em",
                            padding: "0 35px"
                        }}>
                        Ben
                    </span>
                    <br />
                    <span
                        style={{
                            backgroundColor: "#FFFE91",
                            borderRadius: "50px",
                            lineHeight: "1.5em",
                            padding: "0 35px"
                        }}>
                        Eric
                    </span>
                    <button>Create Note</button>
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
