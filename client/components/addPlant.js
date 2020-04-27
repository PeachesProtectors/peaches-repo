import React from 'react'

const AddPlant = props => {
  const {handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="plantName">
          <small>Name</small>
        </label>
        <input name="plantName" type="text" />
      </div>
      <div>
        <label htmlFor="description">
          <small>Description</small>
        </label>
        <textarea name="description" rows="5" cols="50" />
      </div>
      <div>
        <label htmlFor="imageUrl">
          <small>Picture</small>
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
        <label htmlFor="lightRequirements">
          <small>Light Requirements:</small>
          <select name="lightRequirements">
            <option> - select light requirements - </option>
            <option value="Low Light">Low Light</option>
            <option value="Bright Light">Bright Light</option>
          </select>
        </label>
      </div>
      <div>
        <button type="submit">Add New Plant!</button>
      </div>
    </form>
  )
}

export default AddPlant
