import React, { Component } from 'react';
import './ClassicCounter.scss';
import CountUp from 'react-countup';

class ClassicCounter extends Component {
  render() {
    return (
      <div className='counter-box'>
        <h3 style={{color: this.props.color}}>{this.props.title}</h3>
        <CountUp style={{color: this.props.color}} end={this.props.number} separator=","/>
      </div>
    );
  }
}

export default ClassicCounter;
