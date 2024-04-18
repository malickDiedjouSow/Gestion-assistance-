import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Grid } from '@mui/material';
import technicien from "../assets/img/Technicien.jpg"

const FormDemande = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        libelle: "",
        objet: "",
        date: "", // Remplacer par la date actuelle si nécessaire
        // user: null
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const postDemande = () => {
        setLoading(true);
        fetch(`http://localhost:8081/GA/demandeInterventions/`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de connexion au serveur');
            }
            return response.json();    
        })
        .then(data => {
            // Traiter la réponse du serveur si nécessaire
            console.log('Demande ajoutée avec succès:', data);
            alert("Votre demande d'assistance a été enregistrée avec succès !");
        })
        .catch(error => {
            console.error("Une erreur s'est produite :", error.message);
            alert("Une erreur s'est produite lors de l'enregistrement de la demande.");
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <div>
           <br/>
            <Grid container spacing={6} alignItems="center">
                <Grid item xs={4}>
                    <img src={technicien} alt='technicien' width={450} height={550} style={{margin:"42px"}}/>
                </Grid>
                <Grid item xs={6}>
                <h2><b>Demande d'Assistance</b></h2>
                    <form>
                        <TextField
                            id="libelle"
                            label="Libellé"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            onChange={handleChange}
                            name="libelle"
                            value={data.libelle}
                            required
                        />
                        <TextField
                            id="objet"
                            label="Objet de la demande"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            onChange={handleChange}
                            name="objet"
                            value={data.objet}
                            required
                        />
                        <TextField
                            id="date"
                            label="Date de la demande"
                            type="datetime-local" // Utiliser "datetime-local" pour les dates et heures
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleChange}
                            name="date"
                            value={data.date}
                            required
                        />
                        <Button
                        id="valider1"
                        onClick={postDemande}
                        variant="contained"
                        fullWidth
                    //     sx={{ mt: 7 , width:'50rem' }}
                     >
                        Enregistrer
                    </Button>
                    </form>
                    </Grid>
                    </Grid>
                    </div>
                   
                    
)
}
export default FormDemande;