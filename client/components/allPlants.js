import React from 'react'
import connect from 'react-redux'
import { Link } from 'react-router-dom'
import Plant from './Plant'
import getPlantsThunk from '../store/allPlantsReducer'

class AllPlants extends React.Component {
  // constructor () {

  // }
  componentDidMount () {
    this.props.getAllPlants()
  }

  render () {

    return {
      //{this.props.allPlants && this.state} //map to Plant component and make Links
    }
  }
}

const mapState = state => {
  return {
    allPlants: state.allPlantsReducer
  }
}

const mapDispatch = dispatch => {
  return {
    getAllPlants: ()=> dispatch(getPlantsThunk())
  }
}

export default connect(mapState, mapDispatch)(AllPlants)
