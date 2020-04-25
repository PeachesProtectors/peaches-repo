import React from 'react'
import {connect} from 'react-redux'
import {getCartThunk} from '../store/checkoutReducer'

class LoggedInCart extends React.Component {
  componentDidMount() {
    this.props.loadCart()
  }

  render() {
    console.log(this.props)
    return <div>HELLO WORLD</div>
  }
}

const mapState = state => {
  return {
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    loadCart: () => dispatch(getCartThunk())
  }
}

export default connect(mapState, mapDispatch)(LoggedInCart)
