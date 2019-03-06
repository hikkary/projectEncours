import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import i18next from 'i18next'

import PrivateRoute from '../utils/privateRoute'

import Home from '../screens/home'
import Houses from '../screens/houses'
import Ranking from '../screens/ranking'
import Login from '../screens/login'
import Options from '../screens/options'

export default class Routes extends React.Component {
  componentDidMount() {
    this.langageSelector()
  }

  langageSelector = () => {
    if (!localStorage.getItem('langage')) {
      localStorage.setItem('langage', i18next.language)
    } else {
      const currentLanguage = localStorage.getItem('langage')
      i18next.changeLanguage(currentLanguage)
    }
    this.forceUpdate()
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/ranking" component={Ranking} />
          <PrivateRoute path="/houses/:name" component={Houses} />
          <PrivateRoute path="/options" component={Options} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}
