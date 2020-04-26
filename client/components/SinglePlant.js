import React from 'react'
import {connect} from 'react-redux'
import {getSinglePlantThunk} from '../store/allPlantsReducer'
import {updateCartThunk, getCartThunk} from '../store/cartReducer'

class SinglePlant extends React.Component {
  constructor() {
    super()
    if (!window.localStorage.getItem('plant')) {
      window.localStorage.setItem('plant', JSON.stringify([]))
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    const plantId = this.props.match.params.plantId
    this.props.getSinglePlant(plantId)
    this.props.loadCart()
  }

  handleClick() {
    const {id, name, imageUrl, price} = this.props.plant
    const localCart = JSON.parse(window.localStorage.getItem('plant'))
    const currentPlant = localCart.find(p => p.id === id)
    if (!currentPlant) {
      localCart.push({
        id: id,
        name: name,
        imageUrl: imageUrl,
        price: price,
        quantity: 1
      })
    } else {
      currentPlant.quantity++
    }

    window.localStorage.setItem('plant', JSON.stringify(localCart))

    if (this.props.isLoggedIn) {
      this.props.updateCart(localCart)
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
    getSinglePlant: plantId => dispatch(getSinglePlantThunk(plantId)),
    updateCart: cart => dispatch(updateCartThunk(cart)),
    loadCart: () => dispatch(getCartThunk())
  }
}

export default connect(mapState, mapDispatch)(SinglePlant)
