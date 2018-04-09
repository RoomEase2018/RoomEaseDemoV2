import update from "react-addons-update"

const defaultState = {
    loggedIn: false,
    username: "Ryan",
    user_id: 1,
    apt_id: 1,
    pic: "https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg", //"https://demos.subinsb.com/isl-profile-pic/image/person.png",
    roomKarma: 50,
    task: [
        {
            desc: "Take out the trash",
            date: "04/12/18"
        }
    ]
}

export default (state = defaultState, action) => {
    let newstate = state
    switch (action.type) {
        case "LOGIN": {
            return {
                ...state,
                loggedIn: true
            }
        }

        case "SIGN_OUT": {
            return update(newstate, {
                loggedIn: {
                    $apply: function(x) {
                        return !x
                    }
                }
            })
        }
        default:
            return newstate
    }
}
