import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Plant from '../Plant'
import {getLowLightThunk} from '../../store/allPlantsReducer'

class LowPlants extends React.Component {
  componentDidMount() {
    this.props.getAllLowPlants()
  }

  render() {
    const {lowPlants} = this.props
    return (
      <div>
        {lowPlants &&
          lowPlants.map(plant => <Plant key={plant.id} plant={plant} />)}
      </div>
    )
  }
}

const mapState = state => {
  return {
    lowPlants: state.allPlantsReducer.lowLightPlants
  }
}

const mapDispatch = dispatch => {
  return {
    getAllLowPlants: () => dispatch(getLowLightThunk())
  }
}

export default connect(mapState, mapDispatch)(LowPlants)
