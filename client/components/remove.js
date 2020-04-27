import React from 'react'
import {connect} from 'react-redux'
import {deletePlantThunk} from '../store/admin'
import {getPlantsThunk} from '../store/allPlantsReducer'

class DeletePlant extends React.Component {
  constructor() {
    super()
    this.state = {
      id: undefined,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.getAllPlants()
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit(event) {
    // event.preventDefault()
    try {
      await this.props.deletePlant(this.state.id)
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
            Pick Plant:
            <select
              name="id"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option>select plant</option>
              {plants &&
                plants.map((plant) => (
                  <option value={plant.id} key={plant.id}>
                    {plant.name}
                  </option>
                ))}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    plants: state.allPlantsReducer.plants,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getAllPlants: () => dispatch(getPlantsThunk()),
    deletePlant: (plant) => dispatch(deletePlantThunk(plant)),
  }
}

export default connect(mapState, mapDispatch)(DeletePlant)
