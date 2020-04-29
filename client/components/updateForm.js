import React from 'react'
import {useToasts} from 'react-toast-notifications'

const UpdateForm = props => {
  const {plants, state, handleChange, handleSubmit} = props
  const {addToast} = useToasts()

  const onSubmit = e => {
    e.preventDefault()
    addToast('Successfully updated plant!', {appearance: 'success'})
  }

  return (
    <form onSubmit={(handleSubmit, onSubmit)}>
      <label>
        Choose a plant:
        <select name="id" onChange={handleChange}>
          <option value=""> - select plant - </option>
          {plants &&
            plants.map(plant => (
              <option value={plant.id} key={plant.id}>
                {plant.name}
              </option>
            ))}
        </select>
      </label>
      <div>
        <label htmlFor="name">
          <small>Name</small>
        </label>
        <input
          required
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
          required
          onChange={handleChange}
          value={state.description}
          name="description"
          rows="5"
          cols="50"
        />
      </div>
      <div>
        <label htmlFor="imageUrl">
          <small>Picture</small>
        </label>
        <input
          required
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
          required
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
          <select required name="lightRequirements" onChange={handleChange}>
            <option value=""> - select light requirements - </option>
            <option value="Low Light">Low Light</option>
            <option value="Bright Light">Bright Light</option>
          </select>
        </label>
      </div>
      <button
        type="submit"
        disabled={
          !state.id ||
          !state.name ||
          !state.description ||
          !state.imageUrl ||
          !state.price ||
          isNaN(state.price) ||
          !state.lightRequirements
        }
      >
        {' '}
        Submit{' '}
      </button>
      <span id="updated-plant-message" />
    </form>
  )
}

export default UpdateForm
