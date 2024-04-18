import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
// import logo from '../../assets/img/Logo_uasz-bg-transparent.png';
import '../../assets/css/Login.css'; 
import Navbar from '../Navbar';

export default function Login() {
    const [navig, setNavigate] = useState(false);
    const [role, setRole] = useState('');
    const [credentials, setCredentials] = useState({
        mail: "",
        password: "",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setCredentials((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        // Ici, vous pouvez ajouter votre logique de connexion
        // Par exemple, vérifier les identifiants et rediriger en fonction du rôle
        const { mail, password } = credentials;
        // Votre logique de connexion ici
        // Exemple simplifié pour la redirection basée sur des conditions
        if (mail === "malik@uasz-tech.com" && password === "password") {
            setRole('ADMIN');
            setNavigate(true);
        } else if (mail === "aa" && password === "password") {
            setRole('TECHNICIEN');
            setNavigate(true);
        }
        else if (mail === "djiby.fall@uasz.com" && password === "password") {
            setRole('CLIENT');
            setNavigate(true);
        } else {
            alert("Identifiants incorrects");
        }
    };

    if (navig && role === 'ADMIN') {
        return (<Navigate to={"/admin/gestion-assistance"} />);
    } else if (navig && role === 'TECHNICIEN') {
        return (<Navigate to={"/admin/techniciens"} />);
    } else if  (navig && role === 'CLIENT'){
        return (<Navigate to={"/home"} />)
    }

    return (
        <main className="">
            <Navbar/>
            <div className="login-container">
                <div className="text-center">
                    {/* <img src={logo} alt='MyAvatar' width={150} height={150} /> */}
                    <h3 className="login-title">
                        Bienvenue ! <br/> 
                        <span id='subText'>Connectez-vous à votre compte</span>
                    </h3>
                    {/* <p>Vous n'avez pas de compte? 
                        <Link to="/inscription" className="login-link"> S'inscrire →</Link>
                    </p> */}
                    <br/>
                    <br/>
                </div>
                <form className="mt-8 space-y-5" onSubmit={handleOnSubmit}>
                    <div>
                        <label className="login-label">Email</label>
                        <input type="email" name='mail' required className="login-input" onChange={handleChange} />
                    </div>
                    <div>
                        <label className="login-label">Password</label>
                        <input type="password" name='password' required className="login-input" onChange={handleChange} />
                    </div>
                    <div>
                        <label className="login-label">Rôle</label>
                        <select name="role" className="login-input" onChange={handleChange}>
                            <option value="admin">Admin</option>
                            <option value="technicien">Technicien</option>
                            <option value="client">Client</option>
                        </select>
                    </div>
                    <button className="login-button" >Se Connecter →</button>
                    <div className="text-center">
                        <br/>
                        <Link to="#" className="login-link">Mot de Passe oublié?</Link>
                    </div>
                </form>
            </div>
        </main>
    )
}
