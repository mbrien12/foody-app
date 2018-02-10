import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Segment, Header } from 'semantic-ui-react';
import RangeSlider from './RangeSlider';


export default class EndorsementCard extends React.Component {
    render() {
        return (
            <div>
                <Container text className ="card-center">
                    <Segment className="flex-container-center">
                        <Header as='h1'>Endorsements</Header>
                        <p>How <strong>reliable</strong> is Harriet?</p>
                            <RangeSlider/>    
                    </Segment>
                </Container>
            </div>
        );
    }
}