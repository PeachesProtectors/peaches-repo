import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Cart extends React.Component {
  constructor() {
    super()
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.remove = this.remove.bind(this)
  }

  increment() {}

  decrement() {}

  remove() {}

  render() {
    const cart = JSON.parse(window.localStorage.getItem('plant'))
    console.log(cart)
    return (
      <div>
        {cart.length === 0 ? (
          <p>Your cart is currently empty.</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <button type="button" onClick={() => increment()}>
                  +
                </button>
                <span>Qty: {item.quantity}</span>
                <button type="button" onClick={() => decrement()}>
                  -
                </button>
                <button onClick={() => remove()}>remove</button>
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
