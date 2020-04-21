import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PLANTS = 'GET_PLANTS';


/**
 * INITIAL STATE
 */
const initialState = [];

/**
 * ACTION CREATORS
 */
const getPlants = plants => ({ type: GET_PLANTS, plants })


/**
 * THUNK CREATORS
 */
export const getPlantsThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/plants')  // check the server api route
    dispatch(getPlants(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
const allPlantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANTS:
      return action.plants
    default:
      return state
  }
}

export default allPlantsReducer;

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case GET_PLANTS:
//       return action.plants
//     default:
//       return state
//   }
// }
