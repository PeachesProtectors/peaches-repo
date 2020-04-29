import React from 'react'
import {connect} from 'react-redux'
import {getPlantOrderThunk} from '../store/allPlantsReducer'
import DeleteForm from './deleteForm'

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
    console.log('hello change')
    this.setState({id: e.target.value})
  }

  handleSubmit() {
    console.log('1 sub')
    this.setState(initState)
  }

  render() {
    const {plants} = this.props
    return (
      <div>
        <DeleteForm
          plants={plants}
          stateId={this.state.id}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
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

export default connect(mapState, mapDispatch)(DeletePlant)
