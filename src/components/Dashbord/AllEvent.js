import React, { useEffect, useState } from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import SidebarDashBord from './SidebarDashbord';
import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const AllEvent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Simulation de récupération des événements
        const mockEvents = [
            { id: 1, nom: 'Événement 1', typeEvenement: 'Type 1', dateEvenement: '2023-01-01', lieu: 'Lieu 1', duree: '2 heures' },
            { id: 2, nom: 'Événement 2', typeEvenement: 'Type 2', dateEvenement: '2023-01-02', lieu: 'Lieu 2', duree: '3 heures' },
            { id: 3, nom: 'Événement 3', typeEvenement: 'Type 3', dateEvenement: '2023-01-03', lieu: 'Lieu 3', duree: '1 heure' }
        ];
        setEvents(mockEvents);
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
            width: 100,
            editable: false,
        },
        {
            field: 'duree',
            headerName: 'Duree',
            width: 100,
            editable: false,
        },
        {
            field: 'Operations',
            sortable: false,
            filterable: false,
            renderCell: row => (
                <Button variant='contained' color='success' onClick={() => onClickChoice(row.id)} >
                    Choisir
                </Button>
            ),
        },
    ];

    const onClickChoice = (eventId) => {
        // Logique de gestion du clic sur le bouton Choisir
        alert(`Vous avez choisi l'événement avec l'ID: ${eventId}`);
    };

    return (
        <div>
            <PrimarySearchAppBar />
            <div className="dashboard-container">
                <SidebarDashBord />
                <div className="content-container">
                    <br />
                    <h1 id="special1"> Tous les Evenements </h1>
                    <br />
                    <Box sx={{ height: 650, width: '100%' }}>
                        <DataGrid
                            rows={events}
                            getRowId={row => row.id}
                            columns={columns}
                            pageSize={15}
                        />
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default AllEvent;
