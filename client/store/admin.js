import axios from 'axios'

/**
 * ACTION TYPES
 */
const UPDATE_PLANT = 'UPDATE_PLANT'
const DELETE_PLANT = 'DELETE_PLANT'

/**
 * ACTION CREATORS
 */
const updatePlant = plantId => ({type: UPDATE_PLANT, plantId})
const deletePlant = plantId => ({type: DELETE_PLANT, plantId})

/**
 * THUNK CREATORS
 */
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
    // dispatch(updatePlant(res.data))
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
// const adminReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_PLANT:
//       return {...state, newPlant: action.plant}
//     default:
//       return state
//   }
// }

// export default adminReducer
