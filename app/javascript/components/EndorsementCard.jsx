import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Segment, Header, Button, Form } from 'semantic-ui-react';
import RangeSlider from './RangeSlider';


export default class EndorsementCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
             Adaptable: {},
             Collaborative: {},
             Communicative: {},
             Diplomatic: {},
             Empathetic: {},
             Inclusive: {},
             Listening: {},
             Reliable: {}
            };
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit = event => {
        console.log(behaviour[1]);
      }

    render() {
        const behaviour = ['adaptable', 'collaborative', 'communicative', 'diplomatic', 'empathetic', 'inclusive', 'good at listening', 'reliable'  ]
    
        return (
            <div>
                <Container text className ="card-center">
                    <Segment>
                        <div className="flex-container-center">
                            <Header as='h1'>Endorsements</Header>
                            <p className="endorsement-question">On a scale of 1-10, how <strong>{behaviour[1]}</strong> is Harriet?</p>
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