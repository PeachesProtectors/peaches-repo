import React from 'react'
import {useToasts} from 'react-toast-notifications'

const AddPlantForm = props => {
  const {state, handleChange, handleSubmit} = props
  const {addToast} = useToasts()

  const onSubmit = e => {
    e.preventDefault()
    addToast('Successfully added new plant!', {appearance: 'success'})
  }

  return (
    <form onSubmit={(handleSubmit, onSubmit)}>
      <div>
        <label htmlFor="name">
          <small>Name</small>
        </label>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          value={state.name}
        />
      </div>
      <div>
        <label htmlFor="description">
          <small>Description</small>
        </label>
        <textarea
          onChange={handleChange}
          name="description"
          rows="5"
          cols="50"
          value={state.description}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">
          <small>Picture</small>
        </label>
        <input
          onChange={handleChange}
          name="imageUrl"
          type="text"
          value={state.imageUrl}
        />
      </div>
      <div>
        <label htmlFor="price">
          <small>Price</small>
        </label>
        <input
          onChange={handleChange}
          name="price"
          type="text"
          pattern="[0-9]*"
          title="i.e. 50 = $50"
          value={state.price}
        />
      </div>
      <div>
        <label htmlFor="lightRequirements">
          <small>Light Requirements:</small>
          <select name="lightRequirements" onChange={handleChange}>
            <option value="DEFAULT"> - select light requirements - </option>
            <option value="Low Light">Low Light</option>
            <option value="Bright Light">Bright Light</option>
          </select>
        </label>
      </div>
      <div>
        <button
          type="submit"
          disabled={
            !state.name ||
            !state.description ||
            !state.imageUrl ||
            isNaN(state.price) ||
            !state.price ||
            !state.lightRequirements
          }
        >
          Add New Plant!
        </button>
      </div>
    </form>
  )
}

export default AddPlantForm
