import React from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'
import {checkoutThunk} from '../store/cartReducer'

class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      address: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.checkout()
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
          </form>
        </div>
        {/* Order Information */}
        <Link to="/thanks" onClick={() => this.handleClick()}>
          <button type="button">Pay Now</button>
        </Link>
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
    checkout: () => dispatch(checkoutThunk())
  }
}

export default connect(mapState, mapDispatch)(Checkout)
