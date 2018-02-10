import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Segment, Header, Button } from 'semantic-ui-react';
import RangeSlider from './RangeSlider';


export default class EndorsementCard extends React.Component {
    render() {
        return (
            <div>
                <Container text className ="card-center">
                    <Segment>
                        <div className="flex-container-center">
                            <Header as='h1'>Endorsements</Header>
                            <p className="endorsement-question">How <strong>reliable</strong> is Harriet?</p>
                            <RangeSlider/> 
                        </div>
                        <div className="flex-container-right">
                            <Button basic>Next</Button> 
                        </div>
                    </Segment>
                </Container>
            </div>
        );
    }
}