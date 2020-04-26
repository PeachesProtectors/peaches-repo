import React from 'react'
import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
import {addPlantThunk} from '../store/admin'

/**
 * COMPONENT
 */
class Admin extends React.Component {
  render() {
    const {handleSubmit} = this.props
    return (
      <div>
        <h2>Add Plant:</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="plantName">
              <small>Plant Name</small>
            </label>
            <input name="plantName" type="text" />
          </div>

          <div>
            <label htmlFor="description">
              <small>Description</small>
            </label>
            <input name="description" type="text" />
          </div>

          <div>
            <label htmlFor="imageUrl">
              <small>Photo</small>
            </label>
            <input name="imageUrl" type="text" />
          </div>

          <div>
            <label htmlFor="price">
              <small>Price</small>
            </label>
            <input name="price" type="price" />
          </div>

          <div>
            <label htmlFor="lightRequirement">
              <small>Light Requirements:</small>
            </label>
            <input list="lightRequirements" name="lightRequirements" />
            <datalist id="lightRequirements">
              <option value="Low Light" />
              <option value="Bright Light" />
            </datalist>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
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

/**
 * PROP TYPES
 */
// Admin.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   // error: PropTypes.object
// }
