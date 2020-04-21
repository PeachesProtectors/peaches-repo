import React from 'react'
import connect from 'react-redux'
import { Link } from 'react-router-dom'
import Plant from './Plant'

class AllPlants extends React.Component {
  // constructor () {

  // }
  async componentDidMount () {

  }


  render () {
    return {
      // {this.props.allPlants && this.state} map to Plant component and make Links
    }
  }
}

const mapState = state => {
  allPlants: state.allPlants
}

const mapDispatch = dispatch => {

}

export default connect(mapState, mapDispatch)(AllPlants)
