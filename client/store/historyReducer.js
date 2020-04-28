import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ORDER_HISTORY = 'GET_ORDER_HISTORY'
const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER'

/**
 * ACTION CREATORS
 */
export const getOrderHistory = history => ({type: GET_ORDER_HISTORY, history})

export const getSingleOrder = order => ({type: GET_SINGLE_ORDER, order})

/**
 * THUNK CREATORS
 */

export const getOrderHistoryThunk = () => async dispatch => {
  let res
  try {
    res = await axios.get('/api/orderhistories')
    dispatch(getOrderHistory(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const getSingleOrderThunk = orderId => async dispatch => {
  let res
  try {
    res = await axios.get(`/api/orderhistories/${orderId}`)
    dispatch(getSingleOrder(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * INITIAL STATE
 */
const initialState = []

/**
 * REDUCER
 */
const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_HISTORY:
      return action.history
    case GET_SINGLE_ORDER:
      return action.order
    default:
      return state
  }
}

export default historyReducer
