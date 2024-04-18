// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../assets/img/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" ><img src={logo} alt="Logo" /></Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/assistance">Assistance</Link>
        </li>
        <li>
          <Link to="/login">Se connecter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
