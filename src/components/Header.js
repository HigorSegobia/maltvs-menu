// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo-container">
        <img img src="./logo.png" alt="Logo" className="header-logo" />
        <h1 className="header-title">Choperia MALTVS</h1>
      </div>
      <nav className="header-nav">
        <Link to="/">Inicio</Link>
      </nav>
    </header>
  );
}

export default Header;
