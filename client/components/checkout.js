import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {checkoutThunk, guestCheckoutThunk} from '../store/cartReducer'

class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      address: '',
      creditcard: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.props.isLoggedIn) {
      this.props.checkout()
    } else {
      this.props.guestCheckout(this.props.cart)
    }
    window.localStorage.clear()
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <div>
              <div>
                <label htmlFor="name">
                  <small>Name</small>
                </label>
                <input name="name" type="text" onChange={this.handleChange} />
              </div>

              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input name="email" type="text" onChange={this.handleChange} />
            </div>

            <div>
              <label htmlFor="address">
                <small>Address</small>
              </label>
              <input name="address" type="text" onChange={this.handleChange} />
            </div>

            <div>
              <label htmlFor="creditCard">
                <small>Credit Card</small>
              </label>
              <input
                name="creditCard"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <Link to="/thanks" onClick={cart => this.handleClick(cart)}>
              <button type="button">Pay Now</button>
            </Link>
          </form>
        </div>
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
    checkout: () => dispatch(checkoutThunk()),
    guestCheckout: cart => dispatch(guestCheckoutThunk(cart))
  }
}

export default connect(mapState, mapDispatch)(Checkout)
