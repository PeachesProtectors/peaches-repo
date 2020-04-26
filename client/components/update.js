import React from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {updatePlantThunk} from '../store/admin'

class UpdatePlant extends React.Component {
  constructor() {
    super()
    this.state = {
      plantName: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  async handleSubmit(e) {
    console.log('e', e)
    e.preventDefault()
    try {
      await this.props.updatePlant(plant)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {plant} = this.props
    return (
      <div>
        <h2>Edit info:</h2>
        <form onSubmit={() => this.handleSubmit(plant)}>
          <div>
            <label htmlFor="plantName">
              <small>Plant Name</small>
            </label>
            <input
              onChange={this.handleChange}
              name="plantName"
              type="text"
              required
              autoFocus
              value={this.state.plantName}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    plant: state.allPlantsReducer.singlePlant
  }
}

const mapDispatch = dispatch => {
  return {
    updatePlant: plant => dispatch(updatePlantThunk(plant))
  }
}

export default connect(mapState, mapDispatch)(UpdatePlant)
