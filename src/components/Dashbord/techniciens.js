import React, { useEffect, useState } from 'react';
import { Box, Button, IconButton, Modal, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "../../assets/css/style2.css";

const Techniciens = () => {
    const [techniciens, setTechniciens] = useState([
        { id: 1, nom: 'Doe', prenom: 'John', adresse: '123 Rue de la Liberté', motDePasse: '123456', dateAjout: '2022-04-01' },
        { id: 2, nom: 'Smith', prenom: 'Jane', adresse: '456 Avenue des Roses', motDePasse: 'abcdef', dateAjout: '2022-04-02' },
        { id: 3, nom: 'Johnson', prenom: 'William', adresse: '789 Boulevard du Soleil', motDePasse: 'qwerty', dateAjout: '2022-04-03' }
    ]);
    const [openModal, setOpenModal] = useState(false);
    const [newTechnicien, setNewTechnicien] = useState({
        nom: "",
        prenom: "",
        adresse: "",
        motDePasse: "",
        dateAjout: ""
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

    const handleAddTechnicien = async (e) => {
        e.preventDefault();
        // Logique d'ajout du technicien ici
        handleCloseModal(); // Fermer le modal après l'ajout
    };

    useEffect(() => {
        // Logique de récupération des techniciens ici
    }, []);

    const handleEdit = (row) => {
        // Logique pour l'édition
        console.log('Éditer la ligne:', row);
    };

    const handleDelete = (id) => {
        // Logique de suppression du technicien ici
    };

    const columns = [
        {
            field: 'nom',
            headerName: 'Nom',
            width: 200,
            editable: false,
        },
        {
            field: 'prenom',
            headerName: 'Prénom',
            width: 200,
            editable: false,
        },
        {
            field: 'adresse',
            headerName: 'Adresse',
            width: 300,
            editable: false,
        },
        {
            field: 'motDePasse',
            headerName: 'Mot de passe',
            width: 200,
            editable: false,
        },
        {
            field: 'dateAjout',
            headerName: 'Date d\'ajout',
            width: 200,
            editable: false,
        },
        {
            field: 'operations',
            width: 100,
            sortable: false,
            filterable: false,
            renderCell: (row) => (
                <div>
                    <IconButton color='primary' onClick={() => handleEdit(row)}>
                        <EditIcon />
                    </IconButton>
                    &nbsp;
                    <IconButton color='error' onClick={() => handleDelete(row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            ),
        },
    ];

    return (
        <div>
            <div className="dashboard-container">
                <div className="content-container">
                    <br />
                    <h1 id="special1"> Gestion des Techniciens
                        <Button
                            id="ajouterTechnicien"
                            variant="contained"
                            onClick={handleOpenModal}>
                            + Ajouter Technicien
                        </Button>
                    </h1>
                    <br />
                    <Box sx={{ height: 650, width: '100%' }}>
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
                        id="nom"
                        label="Nom"
                        variant="outlined"
                        name='nom'
                        onChange={handleChange}
                    />
                    <br />
                    <TextField
                        id="prenom"
                        label="Prénom"
                        variant="outlined"
                        name='prenom'
                        onChange={handleChange}
                    />
                    <br />
                    <TextField
                        id="adresse"
                        label="Adresse"
                        variant="outlined"
                        name='adresse'
                        onChange={handleChange}
                    />
                    <br />
                    <TextField
                        id="motDePasse"
                        label="Mot de passe"
                        variant="outlined"
                        type="password"
                        name='motDePasse'
                        onChange={handleChange}
                    />
                    <br />
                    {/* Date picker pour la date d'ajout */}
                    <br />
                    <Button id="ajouterTechnicien" variant="contained" onClick={handleAddTechnicien}>Ajouter</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default Techniciens;
