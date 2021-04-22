// src/Title.js

import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'
import RandomSpace from '../RandomSpace/RandomSpace'

function Title() {
  return (
    <div className="Title">
      <h1>SFPOPOS</h1>
      <br />
      <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>

      <div>
        <NavLink className="nav-link" activeClassName="nav-link-active" exact
        to="/">List</NavLink>

        <NavLink className="nav-link" activeClassName="nav-link-active" to="/about">About</NavLink>
       </div>
       <RandomSpace />

    </div>
  )
}

export default Title
