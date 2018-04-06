import React from "react";
import UserSnapshot from "./UserSnapshot";
import "../Styles/Profile.css";
import Setup from "./Setup";
import Badges from "./Badges";
import Activity from "./Activity";
import ApartmentList from "./ApartmentList";
import ApartmentGraph from './ApartmentGraph';
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
                <ApartmentGraph />
            </Grid.Row>
            <Grid.Row stretched centered>
                { !apt_id ? <Setup /> : <Activity />}
            </Grid.Row>
        </Grid>
    );
};

export default Profile;