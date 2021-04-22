// src/Project.js

import React from 'react'
import logo from '../../logo.svg'
import './POPOSSpace.css';
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props
  return (
    <div className="POPOSSpace">
    <h1>
      <Link
        className="POPOSSpace-title" // add a class name!
        to={`/details/${id}`}>
        {name}
      </Link>
    </h1>
    <Link to={`/details/${id}`}>
      <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
    </Link>
    <div className="POPOSSpace-info">
      <div>{address}</div>
      <div>{hours}</div>
    </div>
  </div>
  )
}

export default POPOSSpace
