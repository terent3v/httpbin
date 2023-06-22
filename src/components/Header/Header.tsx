import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to='get'>GET</NavLink>
          </li>
          <li>
            <NavLink to='post'>POST</NavLink>
          </li>
          <li>
            <NavLink to='delete'>DELETE</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;