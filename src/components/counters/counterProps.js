import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './counterProps.css'

class CounterProps extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    addToCounterDecrement: PropTypes.func,
    addToCounterIncrement: PropTypes.func
  }

  render() {
    return (
      <div className="counter">
        <p>{this.props.name}</p>
        <p>{this.props.counter}</p>
        <button onClick={this.props.addToCounterIncrement}>+</button>
        <button onClick={this.props.addToCounterDecrement}>-</button>
      </div>
    )
  }
}

// CounterProps.propTypes = {
//   counter: PropTypes.number,
//   addToCounterDecrement: PropTypes.func,
//   addToCounterIncrement: PropTypes.func
// }

export default CounterProps
