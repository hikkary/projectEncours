import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { withTranslation } from 'react-i18next'
import Layout from './layout'

import Loader from '../components/loader'

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

class Home extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    this.getHouses()
  }

  componentDidUpdate(prevProps) {
    // console.log('PRECEDENT', prevProps)
    // console.log('Suivant', this.props)
    if (prevProps.match.params.name !== this.props.match.params.name) {
      this.getHouses()
    }
  }

  getHouses = () => {
    axios(
      `http://hp-api.herokuapp.com/api/characters/house/${
        this.props.match.params.name
      }`,
      {
        method: 'GET'
      }
    )
      .then(res => {
        console.log(res)
        this.setState({ characters: res.data }, () => {
          console.log(this.state)
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log(this.props)
    const { t } = this.props
    return (
      <Layout>
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
        <Link to="slytherin">serpentard</Link>
        <Link to="gryffindor">gryffondor</Link>
        {this.state.characters ? (
          this.state.characters.map(character => {
            console.log(character.name)
            return <p>{character.name}</p>
          })
        ) : (
          <p>pas de data disponible</p>
        )}
        <p>
          {t('numberHouse', {
            count: this.state.characters.length,
            house: this.props.match.params.name
          })}
        </p>
      </Layout>
    )
  }
}

export default withTranslation()(Home)
