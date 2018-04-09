import React, { Component } from "react";
import ApartmentGoals from './ApartmentGoals';
import { Grid, Card, Segment, Image } from "semantic-ui-react";

class ApartmentList extends Component {
    render() {
        const { username } = this.props

        return (
            <Grid.Column verticalAlign="middle" textAlign="left">
                <Card fluid>
                    <Card.Content>
                        <Card.Header>{username}'s Apartments</Card.Header>
                    </Card.Content>
                    <Card.Content className="apartment-name-wrapper">
                        <Card.Description className="apartment-name">
                            <span style={{fontSize: "2em"}}>Koala Bears</span>{" "}
                            <span className='pics' >
                                <Image src="https://react.semantic-ui.com/assets/images/avatar/small/elliot.jpg" avatar /> {" "}
                                <Image src="https://react.semantic-ui.com/assets/images/avatar/small/matthew.png" avatar /> {" "}
                                <Image src="https://react.semantic-ui.com/assets/images/avatar/small/daniel.jpg" avatar />
                            </span>
                        </Card.Description>
                        <Card.Description>
                            <h3>Koala Bears' Goals</h3>
                            <ApartmentGoals />
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }
}

export default ApartmentList
