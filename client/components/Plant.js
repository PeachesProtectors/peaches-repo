import React from 'react'
import connect from 'react-redux'
import {Link} from 'react-router-dom'

const Plant = props => {
  const {id, name, imageUrl, price} = props
  return (
    <div id={id}>
      <img src={} />
      <h2>{name}</h2>
      <h3>{price}</h3>
    </div>
  )
}

export default Plant
