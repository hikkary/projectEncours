import React, { Component } from 'react'

import Layout from './layout'
import { CounterProps } from '../components/counters'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import allTheActions from '../actions'

class Home extends Component {
  componentDidMount() {
    this.props.actions.harry.getCharacters()
    // this.props.actions.counter.incrementCounter()
  }

  render() {
    console.log(this.props)
    return (
      <Layout>
        <CounterProps
          name="gryffondor"
          counter={this.props.counter.countG}
          addToCounterIncrement={() =>
            this.props.actions.counter.incrementCounter('countG')
          }
          addToCounterDecrement={() =>
            this.props.actions.counter.decrementCounter('countG')
          }
        />

        <CounterProps
          name="serpentard"
          counter={this.props.counter.countS}
          addToCounterDecrement={() =>
            this.props.actions.counter.decrementCounter('countS')
          }
          addToCounterIncrement={() =>
            this.props.actions.counter.incrementCounter('countS')
          }
        />
        {this.props.harry.errorMessage ? (
          <p>{this.props.harry.errorMessage}</p>
        ) : null}
        {!this.props.harry.isLoading ? (
          this.props.harry.characters.map((character, key) => {
            return <p key={key}>{character.name}</p>
          })
        ) : (
          <p>Data en cours de chargement</p>
        )}
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
  harry: state.harry
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    counter: bindActionCreators(allTheActions.counter, dispatch),
    harry: bindActionCreators(allTheActions.harry, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
