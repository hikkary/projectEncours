import React, { Component } from 'react'

import Header from '../components/header'

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default Home
