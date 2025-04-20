import React from 'react';
import { NavLink } from 'react-router';
import './Header.css'

function Header() {
  return (
    <div>
     <h1>This is header</h1> 
     <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/mobile'>Mobile</NavLink>
        <NavLink to='/laptop'>Laptop</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/users2'>Users2</NavLink>
        <NavLink to='/posts'>Posts</NavLink>
     </nav>
    </div>
  );
}

export default Header;