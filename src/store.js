import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'
import rootReducer from './reducers'

const middleware = [ thunk, promiseMiddleware() ]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}

export default createStore(
  rootReducer,
  applyMiddleware(...middleware)
)
