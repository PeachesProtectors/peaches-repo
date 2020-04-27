// import axios from 'axios'

// /**
//  * ACTION TYPES
//  */

// const UPDATE_STATUS = 'UPDATE_STATUS'
// const GET_ORDER = 'GET_ORDER'
// const DELETE_ORDER = 'DELETE_ORDER'

// /**
//  * INITIAL STATE
//  */
// const initialState = {}

// /**
//  * ACTION CREATORS
//  */

// export const getOrder = order => ({type: GET_ORDER, order})

// export const updateStatus = updatedOrder => ({
//   type: UPDATE_STATUS,
//   updatedOrder
// })

// export const deleteOrder = completeOrder => ({
//   type: DELETE_ORDER,
//   completeOrder
// })

// /**
//  * THUNK CREATORS
//  */

// export const getOrderThunk = () => async dispatch => {
//   try {
//     const res = await axios.get('/api/orders')
//     dispatch(getOrder(res.data))
//   } catch (err) {
//     console.error(err)
//   }
// }

// export const postStatusThunk = updatedOrder => async dispatch => {
//   try {
//     const res = await axios.put('/api/orders', updatedOrder)
//     dispatch(updateStatus(res.data))
//   } catch (err) {
//     console.error(err)
//   }
// }

// export const deleteCompleteThunk = () => async dispatch => {
//   try {
//     const res = await axios.delete('/api/orders')
//     dispatch(deleteOrder(res.data))
//   } catch (err) {
//     console.error(err)
//   }
// }

// /**
//  * REDUCER
//  */
// const checkoutReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_ORDER:
//       return {...state, order: action.order}
//     case UPDATE_STATUS:
//       return {...state, order: action.updatedOrder}
//     default:
//       return state
//   }
// }

// export default checkoutReducer
