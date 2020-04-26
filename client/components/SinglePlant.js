import React from 'react'
import {connect} from 'react-redux'
import {getSinglePlantThunk} from '../store/allPlantsReducer'
import {updateCartThunk} from '../store/cartReducer'

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
  }

  handleClick() {
    const {id, name, imageUrl, price} = this.props.plant
    const currentPlant = this.props.cart.find(p => p.id === id)
    if (!currentPlant) {
      this.props.cart.push({
        id: id,
        name: name,
        imageUrl: imageUrl,
        price: price,
        quantity: 1
      })
    } else {
      currentPlant.quantity++
    }

    window.localStorage.setItem('plant', JSON.stringify(this.props.cart))

    if (this.props.isLoggedIn) {
      this.props.updateCart(this.props.cart)
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
    isLoggedIn: !!state.user.id,
    cart: state.cartReducer
  }
}

const mapDispatch = dispatch => {
  return {
    getSinglePlant: plantId => dispatch(getSinglePlantThunk(plantId)),
    updateCart: cart => dispatch(updateCartThunk(cart))
  }
}

export default connect(mapState, mapDispatch)(SinglePlant)
