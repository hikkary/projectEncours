import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './config/routes'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import theme from './config/theme'

import { store } from './config/store'
import './config/translations'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ThemeProvider>,

  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
