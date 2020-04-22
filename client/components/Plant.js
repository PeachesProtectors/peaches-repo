import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Plant = props => {
  const {id, name, imageUrl, price} = props.plant
  return (
    <Link to={`/plants/${id}`}>
      <img src={imageUrl} />
      <h2>{name}</h2>
      <h3>{price}</h3>
    </Link>
  )
}

export default Plant
