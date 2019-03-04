import React, { Component } from 'react'

import Header from '../components/header'

class Layout extends Component {
  componentDidMount() {
    console.log('Cycle de vie')
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Layout
