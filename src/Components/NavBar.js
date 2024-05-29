import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1><a href='/'>RA</a></h1>
        </div>
        <nav className={`nav ${isNavOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/project">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <button className="nav-toggle" onClick={toggleNav}>
          &#9776;
        </button>
      </div>
    </header>
  );
};

export default NavBar;
