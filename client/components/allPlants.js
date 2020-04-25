import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Plant from './Plant'
import {getPlantsThunk} from '../store/allPlantsReducer'


class AllPlants extends React.Component {
  constructor(){
    super()
  }

  componentDidMount() {
    this.props.getAllPlants()
  }
  
  render() {
    const {plants} = this.props
    console.log("PLANTS ==========> ", plants)
    return (
      <div>
        {plants &&
          plants.map(plant => (
            // <Link to={`/products/${plant.id}`} key={plant.id}>
            <Plant key={plant.id} plant={plant} />
            // </Link>
          ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    plants: state.allPlantsReducer.plants,
  }
}

const mapDispatch = dispatch => {
  return {
    getAllPlants: () => dispatch(getPlantsThunk())
  }
}

export default connect(mapState, mapDispatch)(AllPlants)
