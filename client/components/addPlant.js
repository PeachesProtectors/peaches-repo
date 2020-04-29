import React from 'react'
import {connect} from 'react-redux'
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

  handleSubmit() {
    try {
      this.setState(initState)
    } catch (error) {
      console.error(error)
    }
  }
  render() {
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

export default AddPlant
