import React from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import Slider from 'react-rangeslider' 
// https://github.com/whoisandy/react-rangeslider

import AddBehaviour from './AddBehaviour'

export default class RangeSlider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 5,
      behaviour: 'adaptable'
    };
  }

  handleChange = value => {
    this.setState({
      value: value,
      behaviour: this.props.behaviour
    });
  };

  render() {
    const { value } = this.state;

    const horizontalLabels = {
      0: "Not at all",
      10: "Extremely"
    };

    return (
      <div>
        <div className="slider">
          <Slider
            min={0}
            max={10}
            value={value}
            labels={horizontalLabels}
            onChangeStart={this.handleChangeStart}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
          />
          <div className="value">{value}</div>
          <AddBehaviour value={this.state.value} behaviour={this.state.behaviour}  />
        </div>
      </div>
    );
  }
}
