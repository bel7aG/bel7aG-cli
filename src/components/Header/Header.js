import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <div className="fake-div">
    <header>
      <h1 className="fake-heading">
        <span>Belhassen Single Page Application</span>

      </h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Career">Career</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  </div>
);

export default Header;
