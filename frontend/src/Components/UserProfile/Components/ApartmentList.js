import React, { Component } from "react"
import ApartmentGoals from "./ApartmentGoals"
import { Grid, Card, Segment, Image } from "semantic-ui-react"

class ApartmentList extends Component {
    render() {
        const { username } = this.props

        return (
            <Grid.Column
                verticalAlign="middle"
                textAlign="left"
                style={{ padding: "0" }}>
                <Card fluid style={{ padding: "0", width: "540px" }}>
                    <Card.Content style={{height: "50px"}}>
                        <Card.Header>{username}'s Apartments</Card.Header>
                    </Card.Content>
                    <Card.Content className="apartment-name-wrapper" style={{height: "303.16px"}}>
                        <Card.Description className="apartment-name">
                            <span style={{ fontSize: "2em" }}>Koala Bears</span>{" "}
                            <span className="pics">
                                <Image
                                    src="https://react.semantic-ui.com/assets/images/avatar/small/elliot.jpg"
                                    avatar
                                />{" "}
                                <Image
                                    src="https://react.semantic-ui.com/assets/images/avatar/small/matthew.png"
                                    avatar
                                />{" "}
                                <Image
                                    src="https://react.semantic-ui.com/assets/images/avatar/small/daniel.jpg"
                                    avatar
                                />
                                <Image
                                    src="https://react.semantic-ui.com/assets/images/avatar/small/christian.jpg"
                                    avatar
                                />
                            </span>
                        </Card.Description>
                        <Card.Description>
                            <ApartmentGoals />
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }
}

export default ApartmentList
