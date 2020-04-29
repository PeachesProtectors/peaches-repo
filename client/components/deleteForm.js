import React from 'react'
import {useToasts} from 'react-toast-notifications'

const DeleteForm = props => {
  const {plants, stateId, handleChange, handleSubmit} = props
  const {addToast} = useToasts()

  const onSubmit = e => {
    e.preventDefault()
    addToast('Successfully removed plant!', {appearance: 'success'})
  }
  return (
    <form onSubmit={(handleSubmit, onSubmit)}>
      <label>
        Choose a plant:
        <select required name="id" value={stateId} onChange={handleChange}>
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

export default DeleteForm
