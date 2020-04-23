import React from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'

class Checkout extends React.Component {
  constructor() {
    this.state = {
      email: '',
      address: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  // check if they are logged in
  // this.props.isLoggedIn
  // componentDidMount() {
  //   this.props.getAllPlants()
  // }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    // const {plants} = this.props
    return (
      <div>
        {/* Order Information */}
        <div>
          <form>
            <div>
              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input name="email" type="text" onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="address">
                <small>Address</small>
              </label>
              <input name="address" type="text" onChange={handleChange} />
            </div>
          </form>
        </div>

        <Link to="/Thanks">
          <button>Pay Now</button>
        </Link>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    // getAllPlants: () => dispatch(getPlantsThunk())
  }
}

export default connect(mapState, mapDispatch)(Checkout)
