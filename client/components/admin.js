import React from 'react'
import {connect} from 'react-redux'
import {addPlantThunk} from '../store/admin'
import {AddPlant, UpdatePlant, DeletePlant} from '../components'

/**
 * COMPONENT
 */
class Admin extends React.Component {
  render() {
    const {handleSubmit} = this.props
    return (
      <div>
        <h2> Add Plant: </h2>
        <AddPlant handleSubmit={handleSubmit} />
        <br />
        <h2> Edit Plant: </h2>
        <UpdatePlant />
        <br />
        <h2> Remove Plant: </h2>
        <DeletePlant />
      </div>
    )
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

export default connect(null, mapDispatch)(Admin)
