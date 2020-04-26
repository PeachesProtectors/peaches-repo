import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADD_PLANT = 'ADD_PLANT'

/**
 * INITIAL STATE
 */
const initialState = {
  newPlant: []
}

/**
 * ACTION CREATORS
 */
const addPlant = plant => ({type: ADD_PLANT, plant})

/**
 * THUNK CREATORS
 */
export const addPlantThunk = plant => async dispatch => {
  try {
    const res = await axios.post('/api/products', plant)
    dispatch(addPlant(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLANT:
      return {...state, newPlant: action.plant}
    default:
      return state
  }
}

export default adminReducer
