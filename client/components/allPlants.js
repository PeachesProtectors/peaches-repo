import React from 'react'
import {connect} from 'react-redux'
import Plant from './Plant'
import {getPlantsThunk} from '../store/allPlantsReducer'

class AllPlants extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getAllPlants()
  }

  render() {
    const {plants} = this.props
    return (
      <div className="flex">
        {plants && plants.map(plant => <Plant key={plant.id} plant={plant} />)}
      </div>
    )
  }
}

const mapState = state => {
  return {
    plants: state.allPlantsReducer.plants
  }
}

const mapDispatch = dispatch => {
  return {
    getAllPlants: () => dispatch(getPlantsThunk())
  }
}

export default connect(mapState, mapDispatch)(AllPlants)
