import React from "react";
import UserSnapshot from "./UserSnapshot";
import "../Styles/Profile.css";
import ApartmentList from "./ApartmentList";
import Activity from "./Activity";
import Badges from "./Badges";
import Setup from "./Setup";
import { Grid } from "semantic-ui-react";

const Profile = ({ user }) => {
    const { username, pic, roomKarma, task, apt_id } = user;

    return (
        <Grid className="profile" container stackable centered columns="equal" verticalAlign="middle">
            <Grid.Row stretched centered> 
                <UserSnapshot
                    username={username}
                    userPic={pic}
                    userRoomKarma={roomKarma}
                    userTask={task}
                />
                
                <Badges />
            </Grid.Row>
            <Grid.Row stretched>
                <ApartmentList username={username} />
                { !apt_id ? <Setup /> : <Activity />}
            </Grid.Row>
        </Grid>
    );
};

export default Profile;