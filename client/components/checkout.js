import React from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'
import {clearCart} from '../store/cartReducer'
import {
  postStatusThunk,
  getOrderThunk,
  deleteCompleteThunk
} from '../store/checkoutReducer'

class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      address: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateStatus = this.updateStatus.bind(this)
  }

  componentDidMount() {
    this.props.getOrder()
  }

  updateStatus() {
    let {order} = this.props.order
    console.log(order)

    let update = {
      createdAt: order.createdAt,
      id: order.id,
      orderDate: order.orderDate,
      orderStatus: 'complete',
      updatedAt: order.updatedAt,
      userId: order.userId
    }
    this.props.orderComplete(update)
    // this.props.removeCompletedOrder()
    this.props.emptyCart()
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
        <Link to="/thanks" onClick={() => this.updateStatus()}>
          <button type="button">Pay Now</button>
        </Link>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cartReducer,
    order: state.checkoutReducer
  }
}

const mapDispatch = dispatch => {
  return {
    emptyCart: () => dispatch(clearCart()),
    getOrder: () => dispatch(getOrderThunk()),
    orderComplete: update => dispatch(postStatusThunk(update))
    // removeCompletedOrder: () => dispatch(deleteCompleteThunk())
  }
}

export default connect(mapState, mapDispatch)(Checkout)
