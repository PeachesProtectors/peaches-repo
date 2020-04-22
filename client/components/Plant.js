import React from 'react'
import connect from 'react-redux'
import {Link} from 'react-router-dom'

const Plant = props => {
  const {id, name, imageUrl, price} = props
  return (
    <div>
      <img src={imageUrl} />
      <h2>{name}</h2>
      <h3>{price}</h3>
    </div>
  )
}

export default Plant
