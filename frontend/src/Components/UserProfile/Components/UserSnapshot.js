import React from "react";
import { Grid, Item, Card, Image, Segment } from "semantic-ui-react";

const UserSnapshot = ({ username, userPic, userRoomKarma, userTask }) => (
  <Grid.Column>
    {/* <h2>Welcome back, {username}!</h2> */}
    <Item.Group className="user-snapshot">
      <Item>
        <Image size="small" circular src={userPic} style={{display: "flwx", alignSelf: "center", height: "150px"}} />

        <Item.Content style={{marginBottom: "5px", paddingRight: "25px"}}>
          <Item.Description>
            <Card fluid>
              <Card.Content>
                <Card.Header>{username}'s Snapshot</Card.Header>
              </Card.Content>
              <Card.Content style={{height: "135px"}}>
                <Card.Description>
                  <span>{userRoomKarma} Karma Points</span> <br />
                  <span>
                    Upcoming Task: {`${userTask[0].desc} ${userTask[0].date}`}
                  </span>
                </Card.Description>

              </Card.Content>
            </Card>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  </Grid.Column>
);

export default UserSnapshot;
