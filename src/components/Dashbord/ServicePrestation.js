import React, { useState, useEffect } from 'react';
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import SidebarDashBord from "./SidebarDashbord";
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Check, Clear } from "@mui/icons-material";

const ServicePrestation = () => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetchEvenement();
    }, []);

    const columns = [
        {
            field: 'nom',
            headerName: 'Nom Evenement',
            width: 200,
            editable: false,
        },
        {
            field: 'typeEvenement',
            headerName: 'Type Evenement',
            width: 200,
            editable: false,
        },
        {
            field: 'dateEvenement',
            headerName: 'Date Evenement',
            width: 150,
            editable: false,
        },
        {
            field: 'lieu',
            headerName: 'Lieu',
            width: 200,
            editable: false,
        },
        {
            field: 'valide',
            headerName: 'Valide',
            width: 200,
            editable: false,
        },
        {
            field: 'duree',
            headerName: 'Duree',
            width: 100,
            editable: false,
        },
        {
            width: 200,
            sortable: false,
            filterable: false,
            renderCell: row => {
                if (row.row.valide === "en cour de traitement") {
                    return (
                        <div>
                            <IconButton id='btnAColorier' color="success" aria-label="Valider" onClick={() => confirmation(row.id, "Validé")}>
                                <Check />
                            </IconButton>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <IconButton id="danger" color="error" onClick={() => confirmation(row.id, "Refusé")}>
                                <Clear color="error" />
                            </IconButton>
                        </div>
                    )
                } else if (row.row.valide === "Validé") {
                    return (
                        <Button variant="contained" color="primary" onClick={() => archiverDemande(row.id)}>
                            Archiver
                        </Button>
                    )
                } else if (row.valide === "Refusé") {
                    return (
                        <p style={{ color: "red" }}>Refusé</p>)
                }
            },
        },
    ];

    const donnes = (chaine) => {
        return { valide: chaine };
    }

    const fetchEvenement = async () => {
        // Simuler la récupération des données sans backend
        const fakeData = [
            { id: 1, nom: 'Evenement 1', typeEvenement: 'Type 1', dateEvenement: '2022-01-01', lieu: 'Lieu 1', valide: 'en cour de traitement', duree: '2h' },
            { id: 2, nom: 'Evenement 2', typeEvenement: 'Type 2', dateEvenement: '2022-01-02', lieu: 'Lieu 2', valide: 'Validé', duree: '3h' },
            { id: 3, nom: 'Evenement 3', typeEvenement: 'Type 3', dateEvenement: '2022-01-03', lieu: 'Lieu 3', valide: 'en cour de traitement', duree: '4h' },
        ];
        setEvent(fakeData);
    };

    const confirmation = (id, chaine) => {
        // Fonction de confirmation sans appel au backend
        console.log("Confirmation :", id, chaine);
    }

    const archiverDemande = (id) => {
        // Fonction d'archivage sans appel au backend
        console.log("Archiver :", id);
    }

    return (
        <div>
            <PrimarySearchAppBar />
            <div className="dashboard-container">
                <SidebarDashBord />
                <div className="content-container">
                    <br />
                    <h1 id="special1"> Mes Prestations </h1>
                    <br />
                    <Box sx={{ height: 650, width: '100%' }}>
                        <DataGrid
                            rows={event}
                            getRowId={row => row.id}
                            columns={columns}
                            pageSize={15}
                        />
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default ServicePrestation;
