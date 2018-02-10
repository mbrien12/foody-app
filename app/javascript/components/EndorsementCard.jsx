import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Segment, Header, Button } from 'semantic-ui-react';
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
      }

    render() {
        return (
            <div>
                <Container text className ="card-center">
                    <Segment>
                        <div className="flex-container-center">
                            <Header as='h1'>Endorsements</Header>
                            <p className="endorsement-question">How <strong>{this.state.Listening}</strong> is Harriet?</p>
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