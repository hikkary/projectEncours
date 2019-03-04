import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import PrivateRoute from '../utils/privateRoute'

import Home from '../screens/home'
import Login from '../screens/login'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/home" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}
