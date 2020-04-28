import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  updateCartThunk,
  getCartThunk,
  increaseQty,
  decreaseQty,
  removePlant
} from '../store/cartReducer'

class Cart extends React.Component {
  constructor() {
    super()
    if (!window.localStorage.getItem('plant')) {
      window.localStorage.setItem('plant', JSON.stringify([]))
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.remove = this.remove.bind(this)
  }

  componentDidMount() {
    this.props.loadCart()
  }

  componentDidUpdate() {
    window.localStorage.setItem('plant', JSON.stringify(this.props.cart))
    if (this.props.isLoggedIn) {
      this.props.updateCart(this.props.cart)
    }
  }

  increment(id) {
    this.props.increment(id)
  }

  decrement(id) {
    this.props.decrement(id)
  }

  remove(id) {
    this.props.remove(id)
  }

  render() {
    const cart = this.props.cart
    return (
      <div>
        {(cart && cart.length === 0) || cart === null ? (
          <p>Your cart is currently empty.</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <button type="button" onClick={() => this.increment(item.id)}>
                  +
                </button>
                <span>Qty: {item.quantity}</span>
                <button type="button" onClick={() => this.decrement(item.id)}>
                  -
                </button>
                <button type="button" onClick={() => this.remove(item.id)}>
                  remove
                </button>
                <p>{item.price}</p>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <button type="button">
            <Link to="/checkout"> Checkout </Link>
          </button>
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cartReducer
  }
}

const mapDispatch = dispatch => {
  return {
    loadCart: () => dispatch(getCartThunk()),
    updateCart: cart => dispatch(updateCartThunk(cart)),
    increment: plantId => dispatch(increaseQty(plantId)),
    decrement: plantId => dispatch(decreaseQty(plantId)),
    remove: plantId => dispatch(removePlant(plantId))
  }
}

export default connect(mapState, mapDispatch)(Cart)
