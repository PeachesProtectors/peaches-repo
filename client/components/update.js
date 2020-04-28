import React from 'react'
import {connect} from 'react-redux'
import {updatePlantThunk} from '../store/admin'
import {getPlantsThunk} from '../store/allPlantsReducer'

const initState = {
  id: '',
  name: '',
  description: '',
  imageUrl: '',
  price: '',
  lightRequirements: ''
}

class UpdatePlant extends React.Component {
  constructor() {
    super()
    this.state = initState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.getAllPlants()
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  async handleSubmit(e) {
    e.preventDefault()
    try {
      const {
        id,
        name,
        description,
        imageUrl,
        price,
        lightRequirements
      } = this.state
      const plant = {id, name, description, imageUrl, price, lightRequirements}

      await this.props.updatePlant(plant)
      this.setState(initState)

      document.getElementById(
        'updated-plant-message'
      ).innerHTML = `<i>Updated ${plant.name}'s info!</i>`
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {
      id,
      name,
      description,
      imageUrl,
      price,
      lightRequirements
    } = this.state
    const {plants} = this.props
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose a plant:*
            <select name="id" onChange={this.handleChange}>
              <option value={initState.name}> - select plant - </option>
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
              onChange={this.handleChange}
              name="name"
              type="text"
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="description">
              <small>Description*</small>
            </label>
            <textarea
              required
              onChange={this.handleChange}
              value={this.state.description}
              name="description"
              rows="5"
              cols="50"
            />
          </div>
          <div>
            <label htmlFor="imageUrl">
              <small>Picture*</small>
            </label>
            <input
              required
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
              required
              onChange={this.handleChange}
              name="price"
              type="text"
              value={this.state.price}
            />
          </div>
          <div>
            <label htmlFor="lightRequirements">
              <small>Light Requirements:*</small>
              <select
                required
                name="lightRequirements"
                onChange={this.handleChange}
              >
                <option value={initState.lightRequirements}>
                  {' '}
                  - select light requirements -{' '}
                </option>
                <option value="Low Light">Low Light</option>
                <option value="Bright Light">Bright Light</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            disabled={
              !id ||
              !name ||
              !description ||
              !imageUrl ||
              !price ||
              !lightRequirements
            }
          >
            {' '}
            Submit{' '}
          </button>
          <span id="updated-plant-message" />
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    plants: state.allPlantsReducer.plants
  }
}

const mapDispatch = dispatch => {
  return {
    getAllPlants: () => dispatch(getPlantsThunk()),
    updatePlant: plant => dispatch(updatePlantThunk(plant))
  }
}

export default connect(mapState, mapDispatch)(UpdatePlant)
