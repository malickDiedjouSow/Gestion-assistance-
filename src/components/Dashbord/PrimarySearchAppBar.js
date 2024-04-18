import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from "../../assets/img/logo.png"
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, Navigate } from 'react-router-dom';
import avatar from '../../assets/img/MyAvatar.svg'
import { Avatar, ListItemIcon, Tooltip } from '@mui/material';
import Logout from '@mui/icons-material/Logout';

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [imgSrc, setImgSrc] = useState('');
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [navigate, setNavigate] = useState(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Code pour la déconnexion ici
    setNavigate(true);
    console.log("clean");
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem>
        {/* Lien vers le profil */}
        <Link to='/profileDashBord'>
          <Avatar src={avatar} sx={{ width: 40, height: 40 }} />
        </Link>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );

  if (navigate){
    return <Navigate to={"/"}/>
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height:'80px' }} id="costumAppBar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 4 }}
          >
            <Link to="/">
              <img src={logo} alt="Logo" className="logo"  width={55} height={55}/>
            </Link>
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
            <h1 id='special'>Admin Dashboard</h1>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} className="inf">
            <Tooltip title="Account settings" style={{ color: 'white' }}>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
              >
                <Avatar src={imgSrc} sx={{ width: 40, height: 40 }} />
              </IconButton>
              {prenom + " " + nom}
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
