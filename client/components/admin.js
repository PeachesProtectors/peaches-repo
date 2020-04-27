import React from 'react'
import {AddPlant, UpdatePlant, DeletePlant} from '../components'

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
      </div>
    )
  }
}

export default Admin
