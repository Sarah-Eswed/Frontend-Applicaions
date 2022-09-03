import React from 'react';
import {Link} from 'react-router-dom';
import Logo from  "./Logo.png";



function Nav() {
 
 const navStyle = {

color: 'white'

 };
 
 
  return (

<nav>
  
  <img src={Logo} alt="logo"  className="Logo"/>
  <ul className="nav-links">
<Link style={navStyle} to='/'>
<li>Home</li>
</Link>

<Link style={navStyle}  to='/do'>
<li>To Do List</li> 
</Link>

<li>API</li>

  </ul>
  </nav>     

  );
}

export default Nav;
