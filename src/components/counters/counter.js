import React, { Component } from 'react'

import './counter.css'

class Counter extends Component {
  state = {
    counter: 0
  }

  render() {
    return (
      <div className="counter">
        <p>{this.state.counter}</p>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </div>
    )
  }
}

export default Counter
