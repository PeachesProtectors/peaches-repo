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
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  async handleSubmit(e) {
    e.preventDefault()
    try {
      const name = e.target.name.value
      const description = e.target.description.value
      const imageUrl = e.target.imageUrl.value
      const price = e.target.price.value
      const lightRequirement = e.target.lightRequirements.value
      const plant = {name, description, imageUrl, price, lightRequirement}

      await this.props.addPlant(plant)
      this.setState(initState)

      document.getElementById(
        'added-plant-message'
      ).innerHTML = `<i>Hello ${name}!</i>`
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    const {name, description, imageUrl, price, lightRequirements} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">
            <small>Name</small>
          </label>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            value={this.state.name}
          />
        </div>
        <div>
          <label htmlFor="description">
            <small>Description</small>
          </label>
          <textarea
            onChange={this.handleChange}
            name="description"
            rows="5"
            cols="50"
            value={this.state.description}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">
            <small>Picture</small>
          </label>
          <input
            onChange={this.handleChange}
            name="imageUrl"
            type="text"
            value={this.state.imageUrl}
          />
        </div>
        <div>
          <label htmlFor="price">
            <small>Price</small>
          </label>
          <input
            onChange={this.handleChange}
            name="price"
            type="text"
            pattern="[0-9]*"
            title="i.e. 50 = $50"
            value={this.state.price}
          />
        </div>
        <div>
          <label htmlFor="lightRequirements">
            <small>Light Requirements:</small>
            <select name="lightRequirements" onChange={this.handleChange}>
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
              !name ||
              !description ||
              !imageUrl ||
              isNaN(price) ||
              !price ||
              !lightRequirements
            }
          >
            Add New Plant!
          </button>
        </div>
        <span id="added-plant-message" />
      </form>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    addPlant: plant => dispatch(addPlantThunk(plant))
  }
}

export default connect(null, mapDispatch)(AddPlant)
