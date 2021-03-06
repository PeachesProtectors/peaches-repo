import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import allPlantsReducer from './allPlantsReducer'
import allUsersReducer from './admin'
import cartReducer from './cartReducer'
import historyReducer from './historyReducer'

const reducer = combineReducers({
  user,
  allPlantsReducer,
  allUsersReducer,
  cartReducer,
  historyReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
