import React from 'react'
import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
import {addPlantThunk} from '../store/admin'

/**
 * COMPONENT
 */
class Admin extends React.Component {
  // render() {
  // const {handleSubmit} = this.props
  // return (
  // <div>
  //   <h2>Add Plant:</h2>
  // </div>
  // )
  // }
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
