import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const INCREASE_QTY = 'INCREASE_QTY'
const DECREASE_QTY = 'DECREASE_QTY'
const REMOVE_PLANT = 'REMOVE_PLANT'
// const CLEAR_CART = 'CLEAR_CART'

/**
 * ACTION CREATORS
 */
export const getCart = cart => ({type: GET_CART, cart})
export const increaseQty = plantId => ({type: INCREASE_QTY, plantId})
export const decreaseQty = plantId => ({type: DECREASE_QTY, plantId})
export const removePlant = plantId => ({type: REMOVE_PLANT, plantId})
// export const clearCart = () => ({type: CLEAR_CART})

/**
 * THUNK CREATORS
 */
export const updateCartThunk = product => async dispatch => {
  try {
    await axios.post('/api/orders/cart', product)
  } catch (err) {
    console.log(err)
  }
}

const updateLocalStorage = cart => {
  window.localStorage.setItem('plant', JSON.stringify(cart))
}

export const getCartThunk = () => async dispatch => {
  let res
  try {
    //login
    res = await axios.get('/api/orders/cart')
    updateLocalStorage(res.data) //sync localstorage with db cart
    dispatch(getCart(res.data))
  } catch (err) {
    //guest
    res = {data: JSON.parse(window.localStorage.getItem('plant')) || []}
    dispatch(getCart(res.data))
    console.log(err)
  }
}

export const checkoutThunk = () => async dispatch => {
  try {
    await axios.put('/api/orders/cart')
  } catch (err) {
    console.log(err)
  }
}

/**
 * INITIAL STATE
 */
const initialState = []

/**
 * REDUCER
 */
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case INCREASE_QTY:
      return state.map(plant => {
        if (plant.id !== action.plantId) {
          return plant
        }
        return {...plant, quantity: plant.quantity + 1}
      })
    case DECREASE_QTY:
      return state.map(plant => {
        if (plant.id !== action.plantId) {
          return plant
        } else if (plant.quantity === 1) {
          return {...plant, quantity: 1}
        }
        return {...plant, quantity: plant.quantity - 1}
      })
    case REMOVE_PLANT:
      return state.filter(plant => plant.id !== action.plantId)
    // case CLEAR_CART:
    //   return []
    default:
      return state
  }
}

export default cartReducer
