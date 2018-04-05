import React, { Component } from "react";
import { Grid, Header, Card, Image, Segment } from "semantic-ui-react";

class ApartmentList extends Component {
  render() {
    const { username } = this.props;

    return (
      <Grid.Column stretched>
        <Card fluid>
          <Card.Content>
            <Card.Header>{username}'s Apartments</Card.Header>
        </Card.Content>
        <Card.Content>
            <Card.Description>
                Apartment 1: Koala Bears
            </Card.Description>
        </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default ApartmentList;
