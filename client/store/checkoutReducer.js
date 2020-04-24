import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADD_ORDER = 'ADD_ORDER'

/**
 * INITIAL STATE
 */
const initialState = {
  orders: []
}

/**
 * ACTION CREATORS
 */
const addOrder = order => ({type: ADD_ORDER, order})

/**
 * THUNK CREATORS
 */
export const postNewOrder = order => async dispatch => {
  try {
    const res = await axios.post('/api/orders', order)
    dispatch(addOrder(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {...state, orders: action.order}
    default:
      return state
  }
}

export default checkoutReducer
