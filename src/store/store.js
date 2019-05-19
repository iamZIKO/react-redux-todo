import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import reducers from '../reducers/index'

const store = createStore(combineReducers(reducers), applyMiddleware(logger))

export default store