import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Navigate } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import "../../assets/css/styleDashbord.css"

const FadeMenuPrest = () => {
    const [navigate, setNavigate] = useState(false);

    const handleLogout = () => {
        // Logique de déconnexion
        setNavigate(true);
        console.log("Déconnexion");
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    if (navigate) {
        return <Navigate to={"/"} />;
    }

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <ExitToAppIcon />
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={() => { handleLogout(); }}>Déconnexion</MenuItem>
            </Menu>
        </div>
    );
};

export default FadeMenuPrest;
