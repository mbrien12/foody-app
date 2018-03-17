import React from "react";
import PropTypes from "prop-types";

import { Icon, Menu, Segment } from "semantic-ui-react";

export default class Header extends React.Component {
  render() {
    return (
      <Segment inverted>
        <Menu stackable inverted secondary>
          <Menu.Item position="right" href="/">
            <Icon name="book" />
            Recipes
          </Menu.Item>
          <Menu.Item>
            <Icon name="food" />
            Restaurants
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
}
