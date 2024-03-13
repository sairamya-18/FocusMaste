import React from 'react';
import './header.css';

function Header() {
  return (
    <header>
      <img src="https://www.seekapor.com/wp-content/uploads/2017/11/Focus.jpg" width="200px" height="200px" alt="Focus" />
      <nav>
        <a href="#features">Features</a>
        <a href="#analytics">Analytics</a>
        <a href="#about">About Us</a>
        <a href="#login">Login</a>
        <a href="#get-started">Get Started</a>
      </nav>
    </header>
  );
}

export default Header;
