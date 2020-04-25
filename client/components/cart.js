import React from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'
import {updateCartThunk, getCartThunk} from '../store/checkoutReducer'

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      cart: JSON.parse(window.localStorage.getItem('plant'))
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.remove = this.remove.bind(this)
  }

  componentDidMount() {
    //login user: load cart from db
    this.props.loadCart()
  }

  increment(id) {
    let plant = this.state.cart.find(p => p.id === id)
    plant.quantity++
    this.setState({cart: this.state.cart})
    window.localStorage.setItem('plant', JSON.stringify(this.state.cart))

    //login user: update db
    if (this.props.isLoggedIn) {
      this.props.updateCart(this.state.cart)
    }
  }

  decrement(id) {
    let plant = this.state.cart.find(p => p.id === id)
    if (plant.quantity === 1) return
    plant.quantity--
    this.setState({cart: this.state.cart})
    window.localStorage.setItem('plant', JSON.stringify(this.state.cart))

    //login user: update db
    if (this.props.isLoggedIn) {
      this.props.updateCart(this.state.cart)
    }
  }

  remove(index) {
    this.state.cart.splice(index, 1)
    this.setState({cart: this.state.cart})
    window.localStorage.setItem('plant', JSON.stringify(this.state.cart))

    //login user: update db
    if (this.props.isLoggedIn) {
      this.props.updateCart(this.state.cart)
    }
  }

  render() {
    console.log(this.props.isLoggedIn)
    // if (this.props.isLoggedIn) {
    //   let cart = this.props.loadCart()
    //   console.log(this.props)
    //   return (
    //     <div>
    //     {cart && cart.length === 0 || cart === null ? (
    //       <p>Your cart is currently empty.</p>
    //     ) : (
    //       <ul>
    //         {cart.map((item, i) => (
    //           <li key={item.products[0].OrderHistory.productId}>
    //             <h3>{item.products[0].name}</h3>
    //             <button type="button" onClick={() => this.increment(item.products[0].productId)}>
    //               +
    //             </button>
    //             <span>Qty: {item.products[0].OrderHistory.quantity}</span>
    //             <button type="button" onClick={() => this.decrement(item.products[0].productId)}>
    //               -
    //             </button>
    //             <button type="button" onClick={() => this.remove(i)}>
    //               remove
    //             </button>
    //             <p>{item.products[0].price}</p>
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //     <button type="button">
    //       <Link to="/checkout"> Checkout </Link>
    //     </button>
    //   </div>
    //   )
    // } else {
    let cart = this.state.cart
    return (
      <div>
        {(cart && cart.length === 0) || cart === null ? (
          <p>Your cart is currently empty.</p>
        ) : (
          <ul>
            {cart.map((item, i) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <button type="button" onClick={() => this.increment(item.id)}>
                  +
                </button>
                <span>Qty: {item.quantity}</span>
                <button type="button" onClick={() => this.decrement(item.id)}>
                  -
                </button>
                <button type="button" onClick={() => this.remove(i)}>
                  remove
                </button>
                <p>{item.price}</p>
              </li>
            ))}
          </ul>
        )}
        <button type="button">
          <Link to="/checkout"> Checkout </Link>
        </button>
      </div>
    )
  }
  // }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadCart: () => dispatch(getCartThunk()),
    updateCart: product => dispatch(updateCartThunk(product))
  }
}

export default connect(mapState, mapDispatch)(Cart)
