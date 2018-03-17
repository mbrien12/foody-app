import React from "react";
import PropTypes from "prop-types";

import { Card, Container, Icon, Image } from "semantic-ui-react";

export default class Recipe extends React.Component {
  render() {
    const recipe = this.props.recipe;
    const cardLayout = {
      marginTop: "100px"
    };
    return (
      <div>
        <Container textAlign="center">
          <Card style={cardLayout} centered>
            <Image src={recipe.image} size="huge" />
            <Card.Content>
              <Card.Header>{recipe.name}</Card.Header>
              <Card.Meta>
                <span className="date">{recipe.time}</span>
                <Icon name="user" />
                For {recipe.serving} people
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Card.Description>
                {recipe.instructions}
              </Card.Description>
            </Card.Content>
          </Card>
        </Container>
      </div>
    );
  }
}
