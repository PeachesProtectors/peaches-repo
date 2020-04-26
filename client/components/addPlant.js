import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const AddPlant = props => {
  const {handleSubmit} = props
  return (
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
  )
}

export default AddPlant
