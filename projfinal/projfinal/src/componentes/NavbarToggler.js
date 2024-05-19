import React from 'react';

const NavbarToggler = ({ isOpen, toggleMenu }) => {
  
  return (
    <div className={`Navbar-Toggler ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="A"></div>
      <div className="B"></div>
      <div className="C"></div>
    </div>
  );
};

export default NavbarToggler;
