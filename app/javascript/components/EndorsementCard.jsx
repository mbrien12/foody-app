import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Segment, Header, Button, Form } from 'semantic-ui-react';
import RangeSlider from './RangeSlider';


export default class EndorsementCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
             Adaptable: 'adaptable' ,
             Collaborative: "collaborative",
             Communicative: "communicative",
             Diplomatic: "diplomatic",
             Empathetic: "empathetic",
             Inclusive: "inclusive",
             Listening: "good at listening",
             Reliable: "reliable"
            };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit = event => {
          console.log('submitted');
      }

    render() {
        return (
            <div>
                <Container text className ="card-center">
                    <Segment>
                        <div className="flex-container-center">
                            <Header as='h1'>Endorsements</Header>
                            <p className="endorsement-question">On a scale of 1-10, how <strong>{this.state.Listening}</strong> is Harriet?</p>
                            <RangeSlider/> 
                        </div>
                        <div className="flex-container-right">
                        <Form onSubmit={this.handleSubmit}>
                            <Button basic type="Submit">Next</Button> 
                        </Form>
                        </div>
                    </Segment>
                </Container>
            </div>
        );
    }
}