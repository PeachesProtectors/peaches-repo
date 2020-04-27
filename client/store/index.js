import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import allPlantsReducer from './allPlantsReducer'
import cartReducer from './cartReducer'
import checkoutReducer from './checkoutReducer'

const reducer = combineReducers({
  user,
  allPlantsReducer,
  cartReducer,
  checkoutReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
