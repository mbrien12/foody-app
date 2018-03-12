import React from 'react';
import PropTypes from 'prop-types';

import { Card, Icon, Image } from 'semantic-ui-react';

export default class RecipeCards extends React.Component {
    render() {

        return (
          <div>
          <h1>RECIPE CARDS WILL LIVE HERE</h1>
          <Card.Group>
          {this.props.recipes.map(function(recipe, i){
              return (
                <Card key={recipe.id}>
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
                  <a>
                    <Icon name='user' />
                    For {recipe.serving} people
                  </a>
                </Card.Content>
              </Card>
              )
          })}
        </Card.Group>
          </div>
        );
    }
}