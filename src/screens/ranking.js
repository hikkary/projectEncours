import React, { Component } from 'react'

import Layout from './layout'
import { connect } from 'react-redux'

class Ranking extends Component {
  state = {
    rank: []
  }

  componentDidMount() {
    const { counter } = this.props
    console.log(counter)
    this.toArray(counter)
    // this.props.actions.counter.incrementCounter()
  }

  toArray = obj => {
    const sortable = []
    for (let school in obj) {
      sortable.push({ name: school, score: obj[school] })
    }
    this.setState({
      rank: sortable.sort((a, b) => {
        return b.score - a.score
      })
    })
  }

  render() {
    console.log(this.props)
    return (
      <Layout>
        {this.state.rank ? (
          this.state.rank.map((school, index) => (
            <p key={index}>{`${school.name} ${school.score}`}</p>
          ))
        ) : (
          <p>pas de data</p>
        )}
      </Layout>
    )
  }
}

// const mapStateToProps = state => ({
//   counter: state.counter
// })

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

// const mapDispatchToProps = () => dispatch => ({
//   actions: {
//     counter: bindActionCreators(allTheActions.counter, dispatch)
//   }
// })
// inutile ici

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Ranking)
