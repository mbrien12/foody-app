import React from "react"
import PropTypes from "prop-types"

import { Input } from 'semantic-ui-react'




class HelloWorld extends React.Component {
  render () {
    return (
      <div>
      <Input error placeholder='Search...' />
        <div>Greeting: {this.props.greeting}</div>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
