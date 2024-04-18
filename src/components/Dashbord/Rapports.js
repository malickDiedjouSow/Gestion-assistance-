// import React, { useEffect, useState } from 'react';
// import PrimarySearchAppBar from './PrimarySearchAppBar';
// import SidebarDashBord from './SidebarDashbord';
// import { Box, IconButton, Typography } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

// const Rapports = () => {
//     const [events, setEvents] = useState([]);

//     useEffect(()=>{
//         fetchEvenementArchiveMensuels();
//     }, []);

//     const columns = [
//         {
//           field: 'nom',
//           headerName: 'Nom Evenement',
//           width: 200,
//           editable: false,
//         },
//         {
//           field: 'typeEvenement',
//           headerName: 'Type Evenement',
//           width: 200,
//           editable: false,
//         },
//         {
//           field: 'dateEvenement',
//           headerName: 'Date Evenement',
//           width: 150,
//           editable: false,
//         },
//         {
//             field: 'user.prenom',
//             headerName: 'Client',
//             width: 150,
//             editable: false,
//         },
//         {
//             field: 'prestations',
//             headerName: 'Prestation',
//             width: 200,
//             editable: false,
//             renderCell: (params) => {
//                 return params.row.prestations.map(prestation => prestation.libelle).join(', ');
//             }
//         },
       
       
//     ];

//     const fetchEvenementArchiveMensuels = async () => {
//         // Simulez la récupération des données sans appel backend
//         const mockEvents = [
//             { id: 1, nom: 'Événement 1', typeEvenement: 'Type 1', dateEvenement: '2023-01-01', user: { prenom: 'John' }, prestations: [{ libelle: 'Prestation 1' }], prestataires: [{ nom: 'Prestataire 1' }] },
//             { id: 2, nom: 'Événement 2', typeEvenement: 'Type 2', dateEvenement: '2023-01-02', user: { prenom: 'Jane' }, prestations: [{ libelle: 'Prestation 2' }], prestataires: [{ nom: 'Prestataire 2' }] },
//             { id: 3, nom: 'Événement 3', typeEvenement: 'Type 3', dateEvenement: '2023-01-03', user: { prenom: 'William' }, prestations: [{ libelle: 'Prestation 3' }], prestataires: [{ nom: 'Prestataire 3' }] }
//         ];
//         setEvents(mockEvents);
//     };

//     const handleGenerateReport = () => {
//         const doc = new jsPDF();
//         doc.autoTable({
//             head: [['Nom Evenement', 'Type Evenement', 'Date Evenement', 'Client', 'Prestation', 'Prestataire']],
//             body: events.map(event => [
//                 event.nom,
//                 event.typeEvenement,
//                 event.dateEvenement,
//                 event.user ? event.user.prenom : '',
//                 event.prestations.map(prestation => prestation.libelle).join(', '),
               
//             ])
//         });
//         doc.save('rapport_evenements-mensuels.pdf');
//     };

//     return (
//         <div>
//             <PrimarySearchAppBar/>
//             <div className="contenaire">
//                 <SidebarDashBord />
//                 <br/>
//                 <div className="content-container" style={{ width: '100%', overflowX: 'auto' }}>
//                     <div style={{ display: 'flex', alignItems: 'center', marginLeft: '3cm' }}>
//                         <br/><br/>
//                         <Typography variant="h5" id="special1">
//                             Generations de Rapports Mensuels
//                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         </Typography>
//                         <IconButton onClick={handleGenerateReport} aria-label="generate report">
//                             <PictureAsPdfIcon sx={{ color: "red" }} />
//                         </IconButton>
//                     </div>
//                     <Box sx={{ height: 650, width: '100%' }}>
//                         <DataGrid
//                             rows={events}
//                             getRowId={row => row.id} // Utilisez l'identifiant de la ligne
//                             columns={columns}
//                             pageSize={15}
//                         />
//                     </Box>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Rapports;
