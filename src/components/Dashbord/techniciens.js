import React, { useEffect, useState } from 'react';
import { Box, Button, IconButton, Modal, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "../../assets/css/style2.css";
import SidebarDashBord from './SidebarDashbord';
import { Link } from 'react-router-dom';
import '../Navbar.css'; 
import logo from '../../assets/img/logo.png'

const Techniciens = () => {
    const [techniciens, setTechniciens] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [newTechnicien, setNewTechnicien] = useState({
        nom: "",
        prenom: "",
        email: "",
        mot_de_passe: "",
        date: ""
    });

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTechnicien(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const postTechnicien = () => {
        fetch(`http://localhost:8081/GA/techniciens/`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTechnicien)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de connexion au serveur');
            }
            return response.json();    

        })
        .then(newTechnicien => {
            // Traiter la réponse du serveur si nécessaire
            console.log('Technicien ajoutée avec succès:', newTechnicien);
            alert('Technicien ajoutée avec succès:', newTechnicien);
            window.location.reload();
        })
       
        handleCloseModal(); 
    };

    useEffect(() => {
        fetchTechniciens();
    }, []);

    const fetchTechniciens = async () => {
        try {
            const response = await fetch('http://localhost:8081/GA/techniciens/');
            if (response.ok) {
                const newTechnicien = await response.json();
                setTechniciens(newTechnicien);
            } else {
                console.error('Erreur lors de la récupération des techniciens:', response.status);
            }
        } catch (error) {
            console.error('Une erreur s\'est produite:', error);
        }
    };

    const columns = [
        {
          field: 'prenom',
          headerName: 'Prenom',
          width: 300,
          editable: false,
        },
        {
            field: 'nom',
            headerName: 'Nom',
            width: 200,
            editable: false,
          },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            editable: false,
          },
          {
            field: 'mot_de_passe',
            headerName: 'Mot De Passe',
            width: 200,
            editable: false,
          },
          {
            field: 'date',
            headerName: 'Date',
            width: 200,
            editable: false,
          },
          
    ];
    

    return (
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
          <Link to="#">Bonjour, Malik</Link>
        </li>
      </ul>
    </nav>
            <div className="dashboard">
                <SidebarDashBord />
                <div className="content-container">
                    <br />
                   <div id="center">
                    <h1 > Gestion des Techniciens </h1>
                   
                    <Button
                        id="valider13"
                        variant="contained"
                        onClick={handleOpenModal}>
                        + Ajouter Technicien
                    </Button>
                
                   </div>
                    <br />
                    <Box sx={{ height: 650, width: '100%', border:'none' }}>
                        <DataGrid
                            rows={techniciens}
                            columns={columns}
                            pageSize={15}
                            disableSelectionOnClick
                        />
                    </Box>
                </div>
            </div>

            {/* Modal d'ajout de technicien */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 3,
                        
                    }}
                >
                    <h2 id="modal-title">Ajouter un Technicien</h2>
                    <TextField
                        id="prenom"
                        label="Prénom"
                        variant="outlined"
                        name='prenom'
                        onChange={handleChange}
                    />
                  
                    
                    <TextField
                        id="nom"
                        label="Nom"
                        variant="outlined"
                        name='nom'
                        onChange={handleChange}
                    />
                    <br/>
                    <br/>
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        name='email'
                        onChange={handleChange}
                    />
                   
                    <TextField
                        id="mot_de_passe"
                        label="Mot de passe"
                        variant="outlined"
                        type="password"
                        name='mot_de_passe'
                        onChange={handleChange}
                    />
                    <br/>
                    <br/>
                    <TextField
                        id="date"
                        label=""
                        variant="outlined"
                        fullWidth
                        type="date"
                        name='date'
                        onChange={handleChange}
                    />
                    <br />
                    {/* Date picker pour la date d'ajout */}
                    <br />
                    <Button id="ajouterTechnicien" variant="contained" onClick={postTechnicien}>Ajouter</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default Techniciens;
