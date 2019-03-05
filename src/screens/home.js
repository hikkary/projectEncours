import React, { Component } from 'react'

import Layout from './layout'
import { Counter } from '../components/counters'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import allTheActions from '../actions'

class Home extends Component {
  componentDidMount() {
    this.props.actions.counter.incrementCounter()
  }

  render() {
    console.log(this.props)
    return (
      <Layout>
        <Counter name="gryffondor" />
        <Counter name="serpentard" />
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    counter: bindActionCreators(allTheActions.counter, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
