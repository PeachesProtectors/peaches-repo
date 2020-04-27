import React from 'react'
import {AddPlant, UpdatePlant, DeletePlant} from '../components'
import AllUsers from './allUsersAdmin'

class Admin extends React.Component {
  render() {
    return (
      <div>
        <h2> Add Plant: </h2>
        <AddPlant />
        <br />
        <h2> Edit Plant: </h2>
        <UpdatePlant />
        <br />
        <h2> Remove Plant: </h2>
        <DeletePlant />
        <br />
        <h2> Users: </h2>
        <AllUsers />
      </div>
    )
  }
}

export default Admin
