import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import './index.css'

class Header extends React.Component {
  disconnect = () => {
    localStorage.removeItem('token')
    this.props.history.push('/')
  }

  render() {
    return (
      <header className="App-header">
        <Link className="menuHeader" to="/characters">
          <span>Acceuil</span>
        </Link>
        <Link className="menuHeader" to="/houses/gryffindor">
          <span>maisons</span>
        </Link>
        <span className="disconnect" onClick={this.disconnect}>
          deconnexion
        </span>
      </header>
    )
  }
}

export default withRouter(Header)
