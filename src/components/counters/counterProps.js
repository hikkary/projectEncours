import React, { Component } from 'react'

import './counterProps.css'

class CounterProps extends Component {
  render() {
    return (
      <div className="counter">
        <p>{this.props.counter}</p>
        <button onClick={this.props.addToCounterIncrement}>+</button>
        <button onClick={this.props.addToCounterDecrement}>-</button>
      </div>
    )
  }
}

export default CounterProps
