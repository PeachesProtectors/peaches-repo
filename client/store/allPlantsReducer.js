import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PLANTS = 'GET_PLANTS'
const GET_SINGLE_PLANT = 'GET_SINGLE_PLANT'

/**
 * INITIAL STATE
 */
const initialState = {
  plants: [],
  singlePlant: {}
}

/**
 * ACTION CREATORS
 */
const getPlants = plants => ({type: GET_PLANTS, plants})
const getSinglePlant = plant => ({type: GET_SINGLE_PLANT, plant})

/**
 * THUNK CREATORS
 */
export const getPlantsThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/products')
    dispatch(getPlants(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const getSinglePlantThunk = id => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${id}`)
    dispatch(getSinglePlant(res.data))
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
      return {...state, plants: action.plants}
    case GET_SINGLE_PLANT:
      return {...state, singlePlant: action.plant}
    default:
      return state
  }
}

export default allPlantsReducer
