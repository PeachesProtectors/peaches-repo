import React from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {getSinglePlantThunk} from '../store/allPlantsReducer'

class SinglePlant extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    const plantId = this.props.match.params.plantId
    this.props.getPlant(plantId)
  }

  handleClick() {
    let cart = window.localStorage
    const {id, name, imageUrl, price} = this.props.plant
    const plant = {
      id: id,
      name: name,
      imageUrl: imageUrl,
      price: price,
      quantity: 1
    }
    cart.setItem('plant', JSON.stringify(plant))
    console.log(cart)
  }

  render() {
    const {plant} = this.props
    const {id, name, imageUrl, description, price, lightReqs} = plant
    return (
      <div>
        <img src={imageUrl} />

        <h1>{name}</h1>
        <h2>Price: {price}</h2>

        <p>{description}</p>
        <p>{lightReqs}</p>

        <button type="submit" onClick={() => this.handleClick()}>
          Add to Cart
        </button>

        {/* } */}
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
    getPlant: plantId => dispatch(getSinglePlantThunk(plantId))
  }
}

export default connect(mapState, mapDispatch)(SinglePlant)
