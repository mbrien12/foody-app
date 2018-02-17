import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Segment, Header, Button, Form } from 'semantic-ui-react';
import RangeSlider from './RangeSlider';
import CompletedEndorsement from './CompletedEndorsement'


export default class EndorsementCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { behaviour: "adaptable", index: 0, finished: false };
    this.nextBehaviour = this.nextBehaviour.bind(this);
  }

  nextBehaviour(event) {
    const behaviour = [
      "collaborative",
      "communicative",
      "diplomatic",
      "empathetic",
      "inclusive",
      "good at listening",
      "reliable"
    ];
    const finished = this.state.index == behaviour.length;
    this.setState({
      behaviour: behaviour[this.state.index],
      index: this.state.index + 1
    });
    if (finished) {
      this.setState({ finished: true });
    }
  }

  render() {
    if (this.state.finished == false) {
      return (
        <div>
          <Container text className="card-center">
            <Segment>
              <div className="flex-container-center">
                <Header as="h1">Endorsements</Header>
                <p className="endorsement-question">
                  On a scale of 1-10, how{" "}
                  <strong>{this.state.behaviour}</strong> is Harriet?
                </p>
                <RangeSlider behaviour={this.state.behaviour} />
              </div>
              <div className="flex-container-right">
                <Form onSubmit={this.nextBehaviour}>
                  <Button basic type="Submit">
                    Next
                  </Button>
                </Form>
              </div>
            </Segment>
          </Container>
        </div>
      );
    } else {
      return <CompletedEndorsement />;
    }
  }
}