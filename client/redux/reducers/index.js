import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products'
import logsItem from './logs'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    products,
    logsItem
  })

export default createRootReducer
