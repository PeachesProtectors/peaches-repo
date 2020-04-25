import React from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'

class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      address: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // check if they are logged in
  // this.props.isLoggedIn
  // componentDidMount() {
  //   this.props.getAllPlants()
  // }
  async handleSubmit(e) {
    e.preventDefault()
    try {
      // send the order to the db
      // direct user to Thanks component
    } catch (err) {
      console.error(err)
    }
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
        <Link to="/Thanks" onSubmit={this.handleSubmit}>
          <button type="button">Pay Now</button>
        </Link>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

//sends info from form to db
const mapDispatch = dispatch => {
  return {
    // getAllPlants: () => dispatch(getPlantsThunk())
  }
}

export default connect(mapState, mapDispatch)(Checkout)
