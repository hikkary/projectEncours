import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

import './index.css'

class Header extends React.Component {
  disconnect = () => {
    const { history } = this.props
    localStorage.removeItem('token')
    history.push('/')
  }

  render() {
    const { t, history } = this.props
    return (
      <header className="App-header">
        <Link className="menuHeader" to="/characters">
          <span>{t('menu.home')}</span>
        </Link>
        <Link className="menuHeader" to="/houses/gryffindor">
          <span>{t('menu.houses')}</span>
        </Link>
        <Link className="menuHeader" to="/ranking">
          <span>{t('menu.ranking')}</span>
        </Link>
        <Link className="menuHeader" to="/options">
          <span>{t('menu.options')}</span>
        </Link>
        <span className="disconnect" onClick={this.disconnect}>
          deconnexion
        </span>
      </header>
    )
  }
}

const HeaderRouter = withRouter(Header)

export default withTranslation()(HeaderRouter)
