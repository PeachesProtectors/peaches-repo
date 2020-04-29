import React from 'react'
import {useToasts} from 'react-toast-notifications'
import {deletePlantThunk} from '../store/admin'
import {connect} from 'react-redux'

const DeleteForm = props => {
  const {plants, stateId, handleChange, handleSubmit, deletePlant} = props
  const {addToast} = useToasts()

  const onSubmit = async e => {
    e.preventDefault()
    await deletePlant(stateId)
    handleSubmit()
    addToast('Successfully removed plant!', {appearance: 'success'})
  }
  return (
    <form onSubmit={onSubmit}>
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
      <button type="submit" disabled={!stateId}>
        Remove
      </button>
    </form>
  )
}

const mapDispatch = dispatch => {
  return {
    deletePlant: plant => dispatch(deletePlantThunk(plant))
  }
}

export default connect(null, mapDispatch)(DeleteForm)
