import React from 'react'
import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
import {addPlantThunk} from '../store/admin'
import AddPlant from './addPlant'
/**
 * COMPONENT
 */
class Admin extends React.Component {
  render() {
  const {handleSubmit, plants} = this.props
  // const options = plants.map(plant => (
  //   <options value={plant.name} id={plant.id}/>
  // ))

  return (
  <div>
    <h2>Add Plant:</h2>
    <AddPlant handleSubmit={handleSubmit} />
    <br />
    <h2> Update Plant: </h2>
    
    <AddPlant />
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
    handleSubmit(e) {
      e.preventDefault()
      const name = e.target.plantName.value
      const description = e.target.description.value
      const imageUrl = e.target.imageUrl.value
      const price = e.target.price.value
      const lightRequirement = e.target.lightRequirements.value
      const plantObj = {name, description, imageUrl, price, lightRequirement}
      dispatch(addPlantThunk(plantObj))
    }
  }
}

export default connect(mapState, mapDispatch)(Admin)

/**
 * PROP TYPES
 */
// Admin.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   // error: PropTypes.object
// }
