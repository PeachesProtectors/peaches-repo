import axios from 'axios'

const GET_ALL_USERS = 'GET_ALL_USERS'
const initialState = {
  users: []
}

const getAllUsers = users => ({type: GET_ALL_USERS, users})
/**
 * THUNK CREATORS
 */
export const getAllUsersThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/users') // check the server api route
    dispatch(getAllUsers(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const updateAdminThunk = user => async () => {
  try {
    console.log('THUNK ======> ', user)
    await axios.put(`/api/users/${user.id}`, user)
    console.log('THUNK AFTER ======> ', user)
  } catch (err) {
    console.error(err)
  }
}

export const addPlantThunk = plant => async () => {
  try {
    await axios.post('/api/products', plant)
  } catch (err) {
    console.error(err)
  }
}

export const updatePlantThunk = plant => async () => {
  try {
    console.log(plant)
    await axios.put(`/api/products/${plant.id}`, plant)
  } catch (err) {
    console.error(err)
  }
}

export const deletePlantThunk = plantId => async () => {
  try {
    await axios.delete(`/api/products/${plantId}`)
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
const allUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {...state, users: action.users}
    default:
      return state
  }
}

export default allUsersReducer
