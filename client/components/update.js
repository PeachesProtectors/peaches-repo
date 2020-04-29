import React from 'react'
import {connect} from 'react-redux'
import UpdateForm from './updateForm'
import {getPlantOrderThunk} from '../store/allPlantsReducer'

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

  handleSubmit() {
    this.setState(initState)
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
    getAllPlants: () => dispatch(getPlantOrderThunk())
  }
}

export default connect(mapState, mapDispatch)(UpdatePlant)
