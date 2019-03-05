import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from '../reducers'

// used for async func use on redux

export const store = createStore(reducers, applyMiddleware(logger, thunk))
