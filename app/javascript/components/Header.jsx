import React from 'react';
import PropTypes from 'prop-types';

import { Menu } from 'semantic-ui-react';

export default class Header extends React.Component {
    render() {
        return (
        <Menu>
            <Menu.Item>Home</Menu.Item>
        </Menu>
        );
    }
}