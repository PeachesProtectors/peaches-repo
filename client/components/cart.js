import React from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'
import Checkout from './components/checkout'

class Cart extends React.Component {
  // componentDidMount() {
  //   this.props.getAllPlants()
  // }

  render() {
    // const {plants} = this.props
    return (
      <div>
        if (cart is empty) (<p>Your cart is currently empty.</p>) else (
        <ul>
          {cartItems.map(item => (
            <li>
              <img />
              <h3>{item.name}</h3>

              <button>remove</button>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
        <div>
          <p>
            subtotal: <span />
          </p>
          <Link to="/checkout"> checkout </Link>
        </div>
        <div>
          <Route path="/checkout" component={Checkout} />
        </div>
        )
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

export default connect(mapState, mapDispatch)(Cart)
