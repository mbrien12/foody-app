import React from "react";
import PropTypes from "prop-types";

import { Button, Form, Header, Segment } from "semantic-ui-react";

export default class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() { 
    var name = this.refs.name.value; 
    var description = this.refs.description.value; 
    console.log('The name value is ' + name + 'the description value is ' + description); 
  };


    return (
      <div>
        <input ref="name" placeholder="Enter the name of the item" />
        <input ref="description" placeholder="Enter a description" />
        <button onClick={this.handleClick}>Submit</button>
      </div>

      //www.pluralsight.com/guides/ruby-ruby-on-rails/building-a-crud-interface-with-react-and-ruby-on-rails#QxymK1TtUzvwyFyO.99
    );
  }
}
