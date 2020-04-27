import React from 'react'
import {Link} from 'react-router-dom'

const Plant = props => {
  const {id, name, imageUrl, price} = props.plant
  return (
    <Link to={`/plants/${id}`}>
      <img src={imageUrl} />
      <h2>{name}</h2>
      <h3>Price: ${price}</h3>
    </Link>
  )
}

export default Plant
