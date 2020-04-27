import React from 'react'
import {connect} from 'react-redux'
import {updatePlantThunk} from '../store/admin'
import {getPlantsThunk} from '../store/allPlantsReducer'

class UpdatePlant extends React.Component {
  constructor() {
    super()
    this.state = {
      id: undefined,
      plantName: '',
      description: '',
      imageUrl: '',
      price: 0,
      lightRequirements: 'Low Light'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.getAllPlants()
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  async handleSubmit() {
    try {
      const plant = {
        name: this.state.plantName,
        id: this.state.id,
        description: this.state.description,
        imageUrl: this.state.imageUrl,
        price: this.state.price,
        lightRequirements: this.state.lightRequirements
      }
      await this.props.updatePlant(plant)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {plants} = this.props
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose a plant:
            <select name="id" onChange={this.handleChange}>
              <option> - select plant -</option>
              {plants &&
                plants.map(plant => (
                  <option value={plant.id} key={plant.id}>
                    {plant.name}
                  </option>
                ))}
            </select>
          </label>
          <div>
            <label htmlFor="plantName">
              <small>Name</small>
            </label>
            <input
              onChange={this.handleChange}
              name="plantName"
              type="text"
              value={this.state.plantName}
            />
          </div>
          <div>
            <label htmlFor="description">
              <small>Description</small>
            </label>
            <textarea
              onChange={this.handleChange}
              value={this.state.description}
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
              value={this.state.price}
            />
          </div>
          <div>
            <label htmlFor="lightRequirements">
              <small>Light Requirements:</small>
              <select name="lightRequirements" onChange={this.handleChange}>
                <option>select light requirements</option>
                <option value="Low Light">Low Light</option>
                <option value="Bright Light">Bright Light</option>
              </select>
            </label>
          </div>
          <button type="submit"> Submit </button>
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
