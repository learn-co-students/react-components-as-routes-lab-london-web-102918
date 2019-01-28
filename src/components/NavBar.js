import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';


class NavBar extends Component {
  render() {
    return (
<div className="navbar">
    <li>
      <NavLink
      to="/"
      exact
      >Home</NavLink>
      </li>
      <li>
      <NavLink
      to="/movies"
      exact
      >Movies</NavLink>
      </li>
      <li>
      <NavLink
      to="/directors"
      exact
      >Directors</NavLink>
      </li>
      <li>
      <NavLink
      to="/actors"
      exact
      >Actors</NavLink>
    </li>
</div>

  )
}
}
export default NavBar;
