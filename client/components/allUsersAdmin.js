import React from 'react'
import {connect} from 'react-redux'
import {getAllUsersThunk, updateAdminThunk} from '../store/admin'

class AllUsers extends React.Component {
  componentDidMount() {
    this.props.getAllUsers()
  }

  render() {
    const {users} = this.props
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
              <small>Admin: {`${user.isAdmin}`}</small>
              <br />
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
