import React from 'react'
import {connect} from 'react-redux'
import {useToasts} from 'react-toast-notifications'
import {addPlantThunk} from '../store/admin'

const AddPlantForm = props => {
  const {state, handleChange, handleSubmit} = props
  const {addToast} = useToasts()

  const onSubmit = async e => {
    e.preventDefault()
    const name = e.target.name.value
    const description = e.target.description.value
    const imageUrl = e.target.imageUrl.value
    const price = e.target.price.value
    const lightRequirement = e.target.lightRequirements.value
    const plant = {name, description, imageUrl, price, lightRequirement}
    await props.addPlant(plant)

    handleSubmit()
    addToast('Successfully added new plant!', {appearance: 'success'})
  }

  return (
    <form onSubmit={onSubmit}>
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

const mapDispatch = dispatch => {
  return {
    addPlant: plant => dispatch(addPlantThunk(plant))
  }
}

export default connect(null, mapDispatch)(AddPlantForm)
