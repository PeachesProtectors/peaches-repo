import React from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {getSinglePlantThunk} from '../store/allPlantsReducer'

class SinglePlant extends React.Component {
  componentDidMount() {
    const plantId = this.props.match.params.plantId
    this.props.getPlant(plantId)
  }

  render() {
    console.log(this.props)
    const {plant} = this.props
    const {id, name, imageUrl, description, price, lightReqs} = plant
    return (
      <div>
        {/* {plant && */}
        <img src={imageUrl} />

        <h1>{name}</h1>
        <h2>Price: {price}</h2>

        <p>{description}</p>
        <p>{lightReqs}</p>

        <button type="submit">
          {/* do something with this button */}
          Add to Cart
        </button>

        {/* } */}
      </div>
    )
  }
}

const mapState = state => {
  return {
    plant: state.allPlantsReducer.singlePlant
  }
}

const mapDispatch = dispatch => {
  return {
    getPlant: plantId => dispatch(getSinglePlantThunk(plantId))
  }
}

export default connect(mapState, mapDispatch)(SinglePlant)
