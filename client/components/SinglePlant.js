import React from 'react'
import {connect} from 'react-redux'
import {getSinglePlantThunk} from '../store/allPlantsReducer'
import {updateCartThunk} from '../store/checkoutReducer'

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

    let purchasePlants = []
    if (cart.getItem('plant')) {
      purchasePlants = JSON.parse(cart.getItem('plant'))
    }

    const existingPlant = purchasePlants.find(plant => plant.id === id)
    if (!existingPlant) {
      purchasePlants.push({
        id: id,
        name: name,
        imageUrl: imageUrl,
        price: price,
        quantity: 1
      })
    } else {
      existingPlant.quantity++
    }
    cart.setItem('plant', JSON.stringify(purchasePlants))

    if (this.props.isLoggedIn) {
      this.props.updateCart(purchasePlants)
    }
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
      </div>
    )
  }
}

const mapState = state => {
  return {
    plant: state.allPlantsReducer.singlePlant,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    getPlant: plantId => dispatch(getSinglePlantThunk(plantId)),
    updateCart: product => dispatch(updateCartThunk(product))
  }
}

export default connect(mapState, mapDispatch)(SinglePlant)
