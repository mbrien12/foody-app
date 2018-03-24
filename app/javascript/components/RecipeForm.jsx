import React from "react";
import PropTypes from "prop-types";

import { Button, Form, Header, Segment } from "semantic-ui-react";
//https://www.npmjs.com/package/react-rails-form-helpers

export default class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: this.props.recipe
    };

    render() {
      return (
        <p>hello</p>
      );
    }
  }
}