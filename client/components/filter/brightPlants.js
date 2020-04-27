import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Plant from '../Plant'
import {getBrightLightThunk} from '../../store/allPlantsReducer'

class BrightPlants extends React.Component {
  constructor(props) {
    super(props)
    // this.handleAscendingClick = this.handleAscendingClick.bind(this)
    // this.handleDescendingClick = this.handleDescendingClick.bind(this)
  }
  componentDidMount() {
    this.props.getAllBrightPlants()
  }

  render() {
    const {brightPlants} = this.props
    const ascendingPrices = brightPlants.sort((a, b) => a.price - b.price)
    const descendingPrices = brightPlants.sort((a, b) => b.price - a.price)
    return (
      <div>
        {/* <div>
      <button onClick={this.handleAscendingClick}>Sort by Price 1 </button> 
      <button onClick={this.handleDescendingClick}>Sort by Price 2 </button> 
      </div> */}
        `{brightPlants &&
          brightPlants.map(plant => (
            <Plant key={plant.id} plant={plant} />
          ))}{' '}
        `
      </div>
    )
  }
}

const mapState = state => {
  return {
    brightPlants: state.allPlantsReducer.brightLightPlants
  }
}

const mapDispatch = dispatch => {
  return {
    getAllBrightPlants: () => dispatch(getBrightLightThunk())
  }
}

export default connect(mapState, mapDispatch)(BrightPlants)
