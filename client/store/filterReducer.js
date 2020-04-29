import axios from 'axios'
import history from '../history'

const GET_LOW_LIGHT = 'GET_LOW_LIGHT'
const GET_BRIGHT_LIGHT = 'GET_BRIGHT_LIGHT'

const initialState = {
  lowLightPlants: [],
  brightLightPlants: []
}

const getLowLightPlants = plants => ({type: GET_LOW_LIGHT, plants})
const getBrightLightPlants = plants => ({type: GET_BRIGHT_LIGHT, plants})
