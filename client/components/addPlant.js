import React from 'react'
import {connect} from 'react-redux'
import {addPlantThunk} from '../store/admin'
import AddPlantForm from './addPlantForm'

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
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    const {name, description, imageUrl, price, lightRequirements} = this.state
    return (
      <div>
        <AddPlantForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    addPlant: plant => dispatch(addPlantThunk(plant))
  }
}

export default connect(null, mapDispatch)(AddPlant)
