import React from 'react'
import {connect} from 'react-redux'
import {updatePlantThunk} from '../store/admin'
import {getPlantsThunk} from '../store/allPlantsReducer'
import UpdateForm from './updateForm'

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
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {plants} = this.props
    return (
      <div>
        <UpdateForm
          plants={plants}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
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
