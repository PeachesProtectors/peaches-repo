import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome, AllUsers} from './components'
import {me} from './store'
import AllPlants from './components/allPlants'
import SinglePlant from './components/SinglePlant'
import Cart from './components/cart'
import Checkout from './components/checkout'
import Thanks from './components/thanks'
import BrightPlants from './components/filter/brightPlants'
import LowPlants from './components/filter/lowPlants'
import Admin from './components/admin'
import OrderHistory from './components/orderHistory'
import SingleOrder from './components/singleOrder'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn, isAdmin} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/plants" component={AllPlants} />
        <Route exact path="/plants/:plantId" component={SinglePlant} />
        <Route exact path="/bright-light" component={BrightPlants} />
        <Route exact path="/low-light" component={LowPlants} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/thanks" component={Thanks} />
        {isAdmin && (
          <Switch>
            {/* Admin ONLY */}
            <Route path="/home" component={UserHome} />
            <Route path="/admin" component={Admin} />
<<<<<<< HEAD
            <Route exact path="/orderhistory" component={OrderHistory} />
            <Route
              exact
              path="/orderhistory/:orderId"
              component={SingleOrder}
            />
=======
            <Route path="/all-users" component={AllUsers} />
>>>>>>> sort
          </Switch>
        )}
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route exact path="/orderhistory" component={OrderHistory} />
            <Route
              exact
              path="/orderhistory/:orderId"
              component={SingleOrder}
            />
          </Switch>
        )}

        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
