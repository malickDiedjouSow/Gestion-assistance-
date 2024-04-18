import React from "react";
import FormDemande from "../FormDemand";
import { Link } from 'react-router-dom';
import '../Navbar.css'; 
import logo from '../../assets/img/logo.png';

export default function Assistance(){
    return(
        <>
        <nav className="navbar">
        <div className="navbar-logo">
        <Link to="/" ><img src={logo} alt="Logo" /></Link>
        </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Accueil</Link>
        </li>
        <li>
          <Link to="/assistance">Assistance</Link>
        </li>
        <li>
          <Link to="#">Bonjour, Djiby Fall </Link>
        </li>
      </ul>
        </nav>
                <FormDemande />

        </>
    )
}