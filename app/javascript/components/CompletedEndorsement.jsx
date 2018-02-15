import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Segment, Header, Button, Form } from 'semantic-ui-react';
import RangeSlider from './RangeSlider';

export default class CompletedEndorsement extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            behaviourScore: {
                adaptable: 0,
                collaborative: 0,
                communicative: 0,
                diplomatic: 0,
                empathetic: 0,
                inclusive: 0,
                listening: 0,
                reliable: 0
            }
        };
      }

    render() {
        return (
            <div>
                <Container text className ="card-center">
                    <Segment>
                        <div className="flex-container-center">
                            <Header as='h1'>Endorsements</Header>
                            <p>You scored these three behaviours the highest: </p>
                        </div>
                            <div className="flex-container-right">
                                <Form>
                                    <Button basic type="Submit">Endorse next person</Button> 
                                </Form>
                            </div>
                    </Segment>
                </Container>
            </div>
            );
        }
    }