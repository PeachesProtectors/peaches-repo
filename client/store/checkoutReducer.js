import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'

/**
 * ACTION CREATORS
 */

const getCart = cart => ({type: GET_CART, cart})

/**
 * THUNK CREATORS
 */
export const updateCartThunk = product => async dispatch => {
  try {
    await axios.post('/api/orders', product)
  } catch (err) {
    console.error(err)
  }
}

export const getCartThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/orders')
    dispatch(getCart(res.data))
  } catch (err) {
    console.error(err)
  }
}
