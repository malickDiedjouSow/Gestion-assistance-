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
    
      <div className="navbar-title">
        <h2>Gestion de l'Assistance aux utilisateurs</h2>
      </div>
    </nav>
  );
};

export default Navbar;
