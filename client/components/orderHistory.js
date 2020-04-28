import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getOrderHistoryThunk} from '../store/historyReducer'

class OrderHistory extends React.Component {
  componentDidMount() {
    this.props.getOrderHistory()
  }

  render() {
    const {history} = this.props

    return (
      <div>
        {history.map(order => {
          console.log(order.products.body)

          return (
            <div key={order.id}>
              <Link to={`/orderhistory/${order.id}`}>
                Order Number: {order.id}
              </Link>
              <p> Order Date: {order.orderDate.slice(0, 10)} </p>
              <br />
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    history: state.historyReducer
  }
}

const mapDispatch = dispatch => {
  return {
    getOrderHistory: () => dispatch(getOrderHistoryThunk())
  }
}

export default connect(mapState, mapDispatch)(OrderHistory)
