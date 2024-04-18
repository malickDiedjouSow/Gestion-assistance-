import React, { useEffect, useState } from 'react';
import SidebarDashBord from "./SidebarDashbord"; 
import { Button,Box, Modal, 
    Table, TableBody, 
    TableCell, TableContainer, 
    TableHead, TableRow, Paper } from '@mui/material';

import { DataGrid } from "@mui/x-data-grid"; 
import "../../assets/css/style2.css"
import { Link } from 'react-router-dom';
import '../Navbar.css'; 
import logo from '../../assets/img/logo.png';

const GestionAssistance = () =>{
    const [event, setEvent] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [techniciens, setTechniciens] = useState([]);

    const [selectedDemandeId, setSelectedDemandeId] = useState(null);
  

    useEffect(()=>{
        fetchDemande();
        fetchTechniciens();
        
    }, []);

    const handleOpenModal = (demandeId) => {
        setSelectedDemandeId(demandeId);
        setOpenModal(true);
    };
    
    // const handleOpenModalTech = () => {
    //     fetchTechniciens()
    //     setOpenModal(true);
    // };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

  

    const handleAddTechnician = async (technicien) => {
        try {
            const response = await fetch(`http://localhost:8081/GA/demandeInterventions/${technicien.id}/addTechnicienToDemande/${selectedDemandeId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.ok) {
                alert("Technicien ajouté avec succès à la demande.");
                handleCloseModal();
            } else {
                throw new Error('Erreur lors de l\'ajout du technicien à la demande.');
            }
        } catch (error) {
            console.error("Une erreur s'est produite :", error);
            alert("Une erreur s'est produite lors de l'ajout du technicien à la demande.");
        }
    };
    

 
   
     
    const columns = [
        {
          field: 'libelle',
          headerName: 'Libelle Demande',
          width: 400,
          editable: false,
        },
        {
            field: 'objet',
            headerName: 'Objet Demande',
            width: 400,
            editable: false,
          },
          {
            field: 'date',
            headerName: 'Date Demande',
            width: 200,
            editable: false,
          },
          {
            field: 'operations',
            headerName: 'Operations',
            width: 200,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <Button 
                    variant="contained" 
                    onClick={() => handleOpenModal(params.row.id)} 
                    id='valider12'>
                        Add Tech
                </Button>
            ),
        },
    ];
    
    const fetchDemande = async () => {
        try {
           
            const response = await fetch(`http://localhost:8081/GA/demandeInterventions/`, {
                headers: { 'Content-Type': 'application/json'},
            });

            if (response.status === 200) {
                const data = await response.json();
                setEvent(data);
                console.log(data);
            } else {
                console.error("Erreur lors de la récupération des données:", response.status);
            }
        } catch (error) {
            console.error("Une erreur s'est produite:", error);
        }
    };
    const fetchTechniciens = async () => {
        try {
           
            const response = await fetch(`http://localhost:8081/GA/techniciens/`, {
                headers: { 'Content-Type': 'application/json'},
            });

            if (response.status === 200) {
                const techniciens = await response.json();
                setTechniciens(techniciens);
                console.log(techniciens);
            } else {
                console.error("Erreur lors de la récupération des données:", response.status);
            }
        } catch (error) {
            console.error("Une erreur s'est produite:", error);
        }
    };



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
                    <br/>
                    <h1 style={{textAlign:'center'}}> Gestion des Assistances </h1> 
                    <br/>
                    <Box sx={{ height: 650, width: '100%' , marginLeft:'0rem', border:'none' }}>
                    <DataGrid
                        rows={event}
                        columns={columns}
                        pageSize={15}
                        disableSelectionOnClick
                        rowIdGetter={(row) => row.id}
                    />

                    </Box>
                </div>
            </div>

         
          <Modal open={openModal} onClose={handleCloseModal} style={{ backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
        <h2>Liste des Techniciens</h2>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Prenom</TableCell>
                        <TableCell>Nom</TableCell>
                        <TableCell>Contact</TableCell>
                        <TableCell>Ajouter</TableCell> {/* Nouvelle cellule pour le bouton */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {techniciens.map((technicien, index) => (
                        <TableRow key={index}>
                            <TableCell>{technicien.prenom}</TableCell>
                            <TableCell>{technicien.nom}</TableCell>
                            <TableCell>{technicien.email}</TableCell>
                            <TableCell> {/* Nouvelle cellule pour le bouton */}
                                <Button onClick={() => handleAddTechnician(technicien)} variant="contained">Ajouter</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
</Modal>
       
            </div>
    );
}

export default GestionAssistance;
