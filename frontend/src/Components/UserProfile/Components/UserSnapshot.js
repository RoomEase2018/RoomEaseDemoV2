import React from "react";

const UserSnapshot = ({ userPic, userRoomKarma, userTask }) => (
    <div className='user-snapshot'>
        <img alt="Profile Picture" src={userPic} />
        <p> Karma Points: {userRoomKarma} </p>
        <p> Upcoming Task: {`${userTask[0].desc} ${userTask[0].date}`}  </p>
    </div>
);

export default UserSnapshot;