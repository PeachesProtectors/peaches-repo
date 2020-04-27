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
{
  /*<section>
    <img src="img.jpg" alt="description" />
    <h2>Product</h2>
    <p>Description</p>
    <aside>
      <ul>
        <li>Spec</li>
        <li>Spec</li>
      </ul>
      <button>Button</button>
    </aside>
  </section>
  
  <Link to={`/plants/${id}`}>
<img src={imageUrl} />
<h2>{name}</h2>
<h3>Price: ${price}</h3>
</Link> */
}
