import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
// import AddService from './AddService';

const FormDemande = () => {
    const [open, setOpen] = useState(false);
    const [idE, setIdE] = useState(0);
    const [data, setData] = useState({
        libelle: "",
        objetDemande: ""
    });

    const handleChange = evt => {
        const value = evt.target.value;
        setData({
          ...data,
          [evt.target.name]: value
        });
    };

    const postDemande = () => {
        // Ici, vous pouvez ajouter votre logique pour gérer la soumission de la demande
        // Par exemple, vous pouvez envoyer les données au backend ou effectuer une autre action
        // Cette fonction est actuellement vide pour l'exemple.
        console.log("Données de la demande:", data);
        setOpen(true);
        // Réinitialiser les données après la soumission
        setData({
            libelle: "",
            objetDemande: ""
        });
    };

    return (
        <div>
            <h3> <b>Demande d'Assistance</b> </h3>
            <div className='contenaire'>
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
                        id="objetDemande"
                        label="Objet de la demande"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleChange}
                        name="objetDemande"
                        value={data.objetDemande}
                        required
                    />
                    <Button
                        id="valider1"
                        onClick={postDemande}
                        variant="contained"
                        fullWidth
                    >
                        Enregistrer
                    </Button>
                </form>
            </div>
            {/* {
                open && <AddService open={open} ide={idE} />
            } */}
        </div>
    );
};

export default FormDemande;
