import React from 'react';
import PropTypes from 'prop-types';

import { Card, Container,Icon, Image } from 'semantic-ui-react';

export default class RecipeCards extends React.Component {
    render() {
      const recipeTitle = {
        padding: '30px'
      }

        return (
          <div>
          <Container textAlign='center'>
          <h1 style={recipeTitle}>Recipes</h1>
          <Card.Group centered>
          {this.props.recipes.map(function(recipe, i){
              return (
                <Card key={recipe.id} href={'/recipes/' + recipe.id}>
                <Image src={recipe.image} />
                <Card.Content>
                  <Card.Header>
                    {recipe.name}
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      {recipe.time}
                    </span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    For {recipe.serving} people
                </Card.Content>
              </Card>
              )
          })}
        </Card.Group>
        </Container>
          </div>
        );
    }
}