import React from 'react';
import PropTypes from 'prop-types';

export default class RecipeCards extends React.Component {
    render() {
        return (
          <div>
            <h1>RECIPE CARDS WILL LIVE HERE</h1>
            <h3>{this.props.recipes[0].name}</h3>
          </div>
        );
    }
}