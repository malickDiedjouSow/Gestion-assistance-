import React, { useEffect, useState } from 'react';
/* import PrimarySearchAppBar from "./PrimarySearchAppBar";
import SidebarDashBord from "./SidebarDashbord"; */
import { Box, IconButton , Button, Modal, TextField} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid"; 
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "../../assets/css/style2.css"

const Services = () =>{
    const [event, setEvent] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const [newService, setNewService] = useState({
        libelle:""
    });

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewService(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleAddService = async (e) => {
        e.preventDefault();
        // Logique d'ajout du service ici
        handleCloseModal(); // Fermer le modal après l'ajout
    };

    useEffect(()=>{
        // Logique de récupération des services ici
    }, []);

    const handleEdit = (row) => {
        // Logique pour l'édition
        console.log('Éditer la ligne:', row);
    };
    
    const handleDelete = (id) => {
        // Logique de suppression du service ici
    };
     
    const columns = [
        {
          field: 'libelle',
          headerName: 'Libelle Service',
          width: 800,
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
                <EditIcon id="Edit"/>
              </IconButton>
              &nbsp;
              &nbsp;
              &nbsp;
              <IconButton color='error' onClick={() => handleDelete(row.id)}>
                <DeleteIcon id="Delete"/>
              </IconButton>
            </div>
          ),
        },
    ];
    
    return (
        <div>
            {/* <PrimarySearchAppBar/> */}
            <div className="dashboard-container">
                {/* <SidebarDashBord /> */}
                <div className="content-container">
                    <br/>
                    <h1 id="special1"> Gestion des Services 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button 
                            id="ajouterService"
                            variant="contained" 
                            onClick={handleOpenModal}>
                               + Add Service
                        </Button>
                    </h1> 
                    <br/>
                    <Box sx={{ height: 650, width: '100%' }}>
                        <DataGrid
                            rows={event}
                            columns={columns}
                            pageSize={15}
                            disableSelectionOnClick
                        />
                    </Box>
                </div>
            </div>

            {/* Modal d'ajout de service */}
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
                    <h2 id="modal-title">Ajouter un Service</h2>
                    <TextField
                        id="libelle"
                        label="Libellé du Service"
                        variant="outlined"
                        name='libelle'
                        onChange={handleChange}
                    />
                    <br/>
                    <br/>
                    <Button id="ajouterService" variant="contained" onClick={handleAddService}>Ajouter</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default Services;
