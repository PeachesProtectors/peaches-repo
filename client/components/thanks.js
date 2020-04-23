import React from 'react'
import {Link} from 'react-router-dom'

const Thanks = () => (
  <div>
    <div>
      <img
        src="http://assets.stickpng.com/thumbs/580b585b2edbce24c47b24c9.png"
        width="170px"
      />
      <h3 className="center"> We'll be shipping it out ASAP! </h3>
    </div>
    <Link to="/plants"> continue shopping </Link>
  </div>
)

export default Thanks
