import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItems = () => {
  return (
    <div className='navbarItem'>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  );
}

export default NavbarItems;
