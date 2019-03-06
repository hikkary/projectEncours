import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Layout from './layout'
import { CounterProps } from '../components/counters'
import allTheActions from '../actions'

const StyledDiv = styled.div`
  height: 50px;
  width: 50px;
  background-color: red;
`
const StyledDivProps = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${props => (props.color ? props.color : 'black')};
`
const StyledDivTheme = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${props => props.theme.color.gryffindorPrimary};
`
const Paragraph = styled.p`
  color: blue;
`

const StyledDivThemeProps = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${props =>
    props.color ? props.theme.color[props.color] : 'black'};
`

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
        <StyledDiv />
        <StyledDivProps color="yellow" />
        <StyledDivProps />
        <StyledDivTheme />
        <StyledDivThemeProps color="slytherinPrimary" />
        <StyledDivThemeProps color="hufflepuffPrimary" />
        <Paragraph>Coucou</Paragraph>
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
