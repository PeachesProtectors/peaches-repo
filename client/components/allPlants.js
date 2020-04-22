import React from 'react'
import connect from 'react-redux'
import {Link} from 'react-router-dom'
import Plant from './plant'
import getPlantsThunk from '../store/allPlantsReducer'

class AllPlants extends React.Component {
  componentDidMount() {
    this.props.getAllPlants()
  }

  render() {
    const {allPlants} = this.props
    return (
      <div>
        {allPlants &&
          allPlants.map(plant => (
            <Link to={} id={plant.id}>
              <Plant plant={plant} />
            </Link>
          ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    allPlants: state.allPlantsReducer.plants
  }
}

const mapDispatch = dispatch => {
  return {
    getAllPlants: () => dispatch(getPlantsThunk())
  }
}

export default connect(mapState, mapDispatch)(AllPlants)
