import axios from 'axios'

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
