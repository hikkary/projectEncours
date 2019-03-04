import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Test from '../screens/testRoute'
import Login from '../screens/login'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/testRoute" component={Test} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}
