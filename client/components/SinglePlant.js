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
    const {plant, isAdmin} = this.props
    const {id, name, imageUrl, description, price, lightReqs} = plant
    return (
      <div id="single-plant">
        <div className="columns is-desktop">
          <div className="column">
            <div className="polaroid">
              <figure className="plant-image">
                <img src={imageUrl} />
              </figure>
            </div>
          </div>

          <div className="column description">
            <div className="column name-plant">
              <h1>
                {name} <span id="price">${price}</span>
              </h1>
            </div>
            <div className="column plant-description">
              <p>{description}</p>
            </div>
            <div className="column">
              <p>{lightReqs}</p>
            </div>
            <div className="column">
              <button
                type="submit"
                onClick={() => this.handleClick()}
                className="button is-medium is-rounded is-danger is-hovered"
              >
                <span className="icon is-medium">
                  <i className="fas fa-shopping-cart" />
                </span>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
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
