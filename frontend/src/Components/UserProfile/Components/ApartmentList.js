import React, { Component } from "react"
import { Grid, Card, Segment, Feed } from "semantic-ui-react"

class ApartmentList extends Component {
    render() {
        const { username } = this.props

        return (
            <Grid.Column verticalAlign="top" textAlign="left">
                <Card fluid>
                    <Card.Content>
                        <Card.Header>{username}'s Apartments</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <Card.Description>
                            Koala Bears (3 Members)
                            <div className='pics' >
                            <Feed.Label image="https://react.semantic-ui.com/assets/images/avatar/small/elliot.jpg" />
                            <Feed.Label image="https://react.semantic-ui.com/assets/images/avatar/small/matthew.png" />
                            <Feed.Label image="https://react.semantic-ui.com/assets/images/avatar/small/daniel.jpg" />
                        </div>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }
}

export default ApartmentList
