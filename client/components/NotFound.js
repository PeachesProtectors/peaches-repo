import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => (
  <div>
    <h2 className="center">
      {' '}
      Sorry we can' the page you were trying to reach couldn't be found on the
      server{' '}
    </h2>
    <h1 className="center"> 404 </h1>
    <div className="plantPosition">
      <img
        className="sadPlant"
        src="https://media3.giphy.com/media/Yoi7H75JB38dHERFVB/source.gif"
      />
    </div>
  </div>
)

export default NotFound
