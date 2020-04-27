import React from 'react'
import {connect} from 'react-redux'
import {getAllUsersThunk} from '../store/admin'

class AllUsers extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getAllUsers()
  }

  render() {
    const {users} = this.props
    // console.log("USERS ======> ", users[0])
    return (
      <div>
        {users &&
          users.map(user => (
            <div key={user.id}>
              <small>
                Name: {user.firstName} {user.lastName}
              </small>
              <br />
              <small>Email: {user.email}</small>
              <br />
              <small>{user.isAdmin}</small>
              <br />
            </div>
          ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    users: state.allUsersReducer.users
  }
}

const mapDispatch = dispatch => {
  return {
    getAllUsers: () => dispatch(getAllUsersThunk())
  }
}

export default connect(mapState, mapDispatch)(AllUsers)
