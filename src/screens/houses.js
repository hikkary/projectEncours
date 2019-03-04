import React, { Component } from 'react'

import Layout from './layout'

class Home extends Component {
  componentDidMount() {
    fetch('http://hp-api.herokuapp.com/api/characters', {
      method: 'GET'
    }).then(res => {
      console.log(res.json())
    })
  }

  render() {
    console.log(this.props)
    return (
      <Layout>
        <p>house</p>
      </Layout>
    )
  }
}

export default Home
