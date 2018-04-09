import React from 'react';
import { Grid, Card, Image, List } from "semantic-ui-react";

const Badges = ({ badges }) => {
    // width={8}
    return (
        <Grid.Column className="badges" verticalAlign="middle" textAlign="left">
            <Card fluid>
                <Card.Content>
                    <Card.Header as="h3">Achievements</Card.Header>
                </Card.Content>
                <Card.Content>
                <List relaxed>
                    <List.Item>
                        <Image avatar src='https://images.vexels.com/media/users/3/127646/isolated/preview/bb4029ca0e2f6ffb36a5c80dba5e54e0-first-place-round-badge-by-vexels.png' />
                        <List.Content>
                            <List.Header>1st task</List.Header>
                            For completing your first task!
                        </List.Content>
                    </List.Item>
                    {/* <br /> */}
                    <List.Item>
                        <Image avatar src='https://images.vexels.com/media/users/3/127646/isolated/preview/bb4029ca0e2f6ffb36a5c80dba5e54e0-first-place-round-badge-by-vexels.png' />
                        <List.Content>
                            <List.Header>1st Karma Point</List.Header>
                            You earned your first Karma Points!
                        </List.Content>
                    </List.Item>
                    {/* <br /> */}
                    <List.Item>
                        <Image avatar src='https://images.vexels.com/media/users/3/127646/isolated/preview/bb4029ca0e2f6ffb36a5c80dba5e54e0-first-place-round-badge-by-vexels.png' />
                        <List.Content>
                            <List.Header>Good Karma</List.Header>
                            You earned 50 KP
                        </List.Content>
                    </List.Item>
                </List>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default Badges
