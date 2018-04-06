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
                    <Card.Content>
                        <Card.Description>
                            Koala Bears (3 Members)
                            <div className='pics' >
                                <Image src="https://react.semantic-ui.com/assets/images/avatar/small/elliot.jpg" avatar />Ryan {" "}
                                <Image src="https://react.semantic-ui.com/assets/images/avatar/small/matthew.png" avatar />Aiden {" "}
                                <Image src="https://react.semantic-ui.com/assets/images/avatar/small/daniel.jpg" avatar />Benjy
                            </div>
                        </Card.Description>
                        <Card.Description>
                            <h3>Apartment Goals</h3>
                            <ApartmentGoals />
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }
}

export default ApartmentList
