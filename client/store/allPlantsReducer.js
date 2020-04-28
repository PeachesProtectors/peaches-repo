import axios from 'axios'
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
export const getPlantsThunk = word => async dispatch => {
  try {
    const res = await axios.get('/api/products')
    const {data} = res
    if (word === 'all') {
      dispatch(getPlants(data))
    } else if (word === 'desc') {
      data.sort((a, b) => a.price - b.price)
      dispatch(getPlants(data))
    } else if (word === 'asc') {
      data.sort((a, b) => b.price - a.price)
      dispatch(getPlants(data))
    } else if (word === 'atoz') {
      data.sort(function(a, b) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })
      dispatch(getPlants(data))
    } else if (word === 'ztoa') {
      data.sort(function(a, b) {
        if (a.name > b.name) {
          return -1
        }
        if (a.name < b.name) {
          return 1
        }
        return 0
      })
      dispatch(getPlants(data))
    }
  } catch (err) {
    console.error(err)
  }
}

export const getPlantOrderThunk = () => async dispatch => {
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

export const getLowLightThunk = word => async dispatch => {
  try {
    const res = await axios.get('/api/products/low-light')
    const {data} = res
    if (word === 'all') {
      dispatch(getLowLightPlants(data))
    } else if (word === 'desc') {
      data.sort((a, b) => a.price - b.price)
      dispatch(getLowLightPlants(data))
    } else if (word === 'asc') {
      data.sort((a, b) => b.price - a.price)
      dispatch(getLowLightPlants(data))
    } else if (word === 'atoz') {
      data.sort(function(a, b) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })
      dispatch(getLowLightPlants(data))
    } else if (word === 'ztoa') {
      data.sort(function(a, b) {
        if (a.name > b.name) {
          return -1
        }
        if (a.name < b.name) {
          return 1
        }
        return 0
      })
      dispatch(getLowLightPlants(data))
    }
  } catch (err) {
    console.error(err)
  }
}

export const getBrightLightThunk = word => async dispatch => {
  try {
    const res = await axios.get('/api/products/bright-light')
    const {data} = res
    if (word === 'all') {
      dispatch(getBrightLightPlants(data))
    } else if (word === 'desc') {
      data.sort((a, b) => a.price - b.price)
      dispatch(getBrightLightPlants(data))
    } else if (word === 'asc') {
      data.sort((a, b) => b.price - a.price)
      dispatch(getBrightLightPlants(data))
    } else if (word === 'atoz') {
      data.sort(function(a, b) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })
      dispatch(getBrightLightPlants(data))
    } else if (word === 'ztoa') {
      data.sort(function(a, b) {
        if (a.name > b.name) {
          return -1
        }
        if (a.name < b.name) {
          return 1
        }
        return 0
      })
      dispatch(getBrightLightPlants(data))
    }
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
