import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PLANTS = 'GET_PLANTS'
const GET_SINGLE_PLANT = 'GET_SINGLE_PLANT'

//filter
const GET_LOW_LIGHT = 'GET_LOW_LIGHT'
const GET_BRIGHT_LIGHT = 'GET_BRIGHT_LIGHT'

/**
 * INITIAL STATE
 */
const initialState = {
  plants: [],
  singlePlant: {},
  lowLightPlants: [],
  brightLightPlants: []
}

/**
 * ACTION CREATORS
 */
const getPlants = plants => ({type: GET_PLANTS, plants})
const getSinglePlant = plant => ({type: GET_SINGLE_PLANT, plant})
const getLowLightPlants = plants => ({type: GET_LOW_LIGHT, plants})
const getBrightLightPlants = plants => ({type: GET_BRIGHT_LIGHT, plants})

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

//filter thunks 'Low Light', 'Bright Light'
//low light
export const getLowLightThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/products/low-light')
    dispatch(getLowLightPlants(res.data))
  } catch (err) {
    console.error(err)
  }
}
//bright light
export const getBrightLightThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/products/bright-light')
    dispatch(getBrightLightPlants(res.data))
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
    case GET_LOW_LIGHT:
      return {...state, lowLightPlants: action.plants}
    case GET_BRIGHT_LIGHT:
      return {...state, brightLightPlants: action.plants}
    default:
      return state
  }
}

export default allPlantsReducer
