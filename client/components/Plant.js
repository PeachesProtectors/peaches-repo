import React from 'react'
import {Link} from 'react-router-dom'

const Plant = props => {
  const {id, name, imageUrl, price} = props.plant
  return (
    <section>
      <Link to={`/plants/${id}`}>
        <img src={imageUrl} />
        <h2 id="name">{name}</h2>
        <p />
        <aside>
          <ul>
            <li>Price: ${price}</li>
          </ul>
        </aside>
      </Link>
    </section>
  )
}

export default Plant
