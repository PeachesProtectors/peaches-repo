import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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

  increment(id) {
    let plant = this.state.cart.find(p => p.id === id)
    plant.quantity++
    this.setState({cart: this.state.cart})
    window.localStorage.setItem('plant', JSON.stringify(this.state.cart))
  }

  decrement(id) {
    let plant = this.state.cart.find(p => p.id === id)
    if (plant.quantity === 1) return
    plant.quantity--
    this.setState({cart: this.state.cart})
    window.localStorage.setItem('plant', JSON.stringify(this.state.cart))
  }

  remove(index) {
    this.state.cart.splice(index, 1)
    this.setState({cart: this.state.cart})
    window.localStorage.setItem('plant', JSON.stringify(this.state.cart))
  }

  render() {
    let cart = this.state.cart
    console.log(cart)
    return (
      <div>
        {cart.length === 0 ? (
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
      </div>
    )
  }
}

const mapState = state => {
  return {
    // plants: state.allPlantsReducer.plants
  }
}

const mapDispatch = dispatch => {
  return {
    // getAllPlants: () => dispatch(getPlantsThunk())
  }
}

export default Cart
// export default connect(mapState, mapDispatch)(Cart)
