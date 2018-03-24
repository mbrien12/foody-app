import React from "react";
import PropTypes from "prop-types";

import { Button, Form, Header,Segment } from "semantic-ui-react";

export default class RecipeForm extends React.Component {
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
      <Form inverted>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Recipe name' placeholder='Lasagna' />
          <Form.Input fluid label='How does it take?' placeholder='40 mins' />
          <Form.Input type='number' label='How many people is it for?' placeholder='4' />
        </Form.Group>
        <Form.Group widths='equal'>
        <Form.Select fluid label='What type of meal is it?' options={options} placeholder='Lunch' />
        <Form.Input fluid label='Where is it from?' placeholder='Guardian' />
        </Form.Group>
        <Form.TextArea label='Ingredients' />
        <Form.TextArea label='Instructions' />
        <Form.Input fluid label='Recipe image url'/>
        <Button type='submit'>Submit</Button>
      </Form>
    </Segment>
    );
  }
}
