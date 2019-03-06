import React, { Component } from 'react'
import i18next from 'i18next'

import Layout from './layout'

class Options extends Component {
  changeLanguage = langage => {
    i18next.changeLanguage(langage)
    localStorage.setItem('langage', langage)
  }

  render() {
    return (
      <Layout>
        <p>Choisissez la langue</p>
        <button onClick={() => this.changeLanguage('fr')}> Francais</button>
        <button onClick={() => this.changeLanguage('en')}> Anglais</button>
      </Layout>
    )
  }
}

export default Options
