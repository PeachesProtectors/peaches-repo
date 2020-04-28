import React from 'react'
import {connect} from 'react-redux'
import {deletePlantThunk} from '../store/admin'
import {getPlantsThunk} from '../store/allPlantsReducer'

const initState = {
  id: ''
}

class DeletePlant extends React.Component {
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
    this.setState({id: e.target.value})
  }

  async handleSubmit() {
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
            Choose a plant:
            <select
              required
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
            >
              <option value={initState.id}> - select plant - </option>
              {plants &&
                plants.map(plant => (
                  <option value={plant.id} key={plant.id}>
                    {plant.name}
                  </option>
                ))}
            </select>
          </label>
          <button type="submit" disabled={!this.state.id}>
            Remove
          </button>
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
    deletePlant: plant => dispatch(deletePlantThunk(plant))
  }
}

export default connect(mapState, mapDispatch)(DeletePlant)
