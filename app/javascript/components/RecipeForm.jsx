import React from "react";
import PropTypes from "prop-types";

import { Button, Form, Header,Segment } from "semantic-ui-react";

export default class RecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState = ({
      submitted: true
    })
    console.log(event.target.value);
  }

  handleSubmit(event){
    const name = this.refs.name.value;
    console.log(name);
  }
  
  render() {
    const options = [
      {key: 'b', text: 'Breakfast', value: 'breakfast'},
      {key: 'l', text: 'Lunch', value: 'lunch'},
      {key: 'd', text: 'Dinner', value: 'dinner'},
      {key: 'de', text: 'Dessert', value: 'dessert'}
    ]

    //TODO: Fix label fonts
    // const labelFont = {
    //   fontWeight: 'lighter',
    //   fontSize: '18px'
    // }

    return (
      <Segment inverted>
      <Header as='h2'>Add recipe</Header>
      <Form inverted onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Recipe name' ref='name' value={name} onChange={this.handleChange} placeholder='Lasagna' />
          <Form.Input fluid label='How does it take?' ref='time' value={time} onChange={this.handleChange} placeholder='40 mins' />
          <Form.Input type='number' ref='serving' value={serving} onChange={this.handleChange} label='How many people is it for?' placeholder='4' />
        </Form.Group>
        <Form.Group widths='equal'>
        <Form.Select fluid label='What type of meal is it?' options={options} onChange={this.handleChange} ref='category' value={category}  placeholder='Lunch' />
        <Form.Input fluid label='Where is it from?' ref='url' value={url} onChange={this.handleChange} placeholder='Guardian' />
        </Form.Group>
        <Form.TextArea label='Ingredients' ref='ingredients' onChange={this.handleChange} value={ingredients} />
        <Form.TextArea label='Instructions' ref='instructions' onChange={this.handleChange} value={instructions} />
        <Form.Input fluid label='Recipe image url' ref='image' onChange={this.handleChange} value={image}/>
        <Button type='submit'>Submit</Button>
      </Form>
    </Segment>
    );
  }
}
