import React from 'react'
import {connect} from 'react-redux'
import {addPlantThunk} from '../store/admin'

const initState = {
  name: '',
  description: '',
  imageUrl: '',
  price: '',
  lightRequirements: ''
}

class AddPlant extends React.Component {
  constructor() {
    super()
    this.state = initState
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            <small>Name</small>
          </label>
          <input name="name" type="text" />
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
        <span id="added-plant-message" />
      </form>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(e) {
      e.preventDefault()
      const name = e.target.name.value
      const description = e.target.description.value
      const imageUrl = e.target.imageUrl.value
      const price = e.target.price.value
      const lightRequirement = e.target.lightRequirements.value
      const plantObj = {name, description, imageUrl, price, lightRequirement}
      document.getElementById(
        'added-plant-message'
      ).innerHTML = `<i>Hello ${name}!</i>`
      dispatch(addPlantThunk(plantObj))
    }
  }
}

export default connect(null, mapDispatch)(AddPlant)
