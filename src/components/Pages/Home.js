import React from "react";
import '../Home.css';
import { Link } from 'react-router-dom';
import '../Navbar.css'; 
import logo from '../../assets/img/logo.png';
import techno from "../../assets/img/techno.jpg";
import IMG1 from '../../assets/img/2A.jpg';
import IMG2 from '../../assets/img/2B.jpg';
import IMG3 from '../../assets/img/2C.jpg';

export default function Home(){
    return(
        <div>
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
          <Link to="#">Bonjour, Djiby Fall </Link>
        </li>
      </ul>
        </nav>
           <div className="acceuil">
                <div className="right">
                    <h1 style={{textAlign:'center'}}> Gestions de l'Assistance aux utilisateurs</h1>
                    <p id="montext">
                   
                    La <i>gestion de l'assistance aux utilisateurs</i> est un processus vital pour garantir la satisfaction client et le bon fonctionnement des produits ou services proposés. En offrant un soutien réactif et proactif, en mettant en place des canaux de communication accessibles, en assignant des agents compétents pour résoudre les problèmes, en fournissant des ressources éducatives et en analysant les données d'assistance, les entreprises peuvent améliorer l'expérience utilisateur, renforcer la fidélité client et maintenir une réputation positive.
                    Ensuite, un système de suivi et de gestion des demandes est mis en place pour traiter efficacement les requêtes des utilisateurs. Les tickets d'assistance sont assignés à des agents compétents qui travaillent à résoudre les problèmes dans les délais impartis. Un suivi rigoureux est assuré pour garantir que chaque demande est traitée de manière satisfaisante et que les utilisateurs sont informés de l'état de leurs demandes.
                    </p>
                </div>
                <div className="left">
                    <marquee>
                    <img src={techno} alt="techno"/>
                    <img src={IMG3} alt="IMG3"/>
                    <img src={IMG1} alt="IMG1"/>
                    <img src={IMG2} alt="IMG2"/>
                    </marquee>
                   
                </div>
           </div>
        </div>
    )
}