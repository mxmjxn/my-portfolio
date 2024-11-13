// src/components/Header.js
import React, { useContext, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Brightness4,
  Brightness7,
  Info as InfoIcon,
  Work as WorkIcon,
  ContactMail as ContactMailIcon,
  Build as BuildIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from './ColorModeContext';

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  // State for the menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Handle menu open
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Your Name or Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Maxim Jackson
        </Typography>

        {/* Dark Mode Toggle */}
        <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>

        {/* Hamburger Menu */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="Open navigation menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          MenuListProps={{
            sx: {
              width: '200px',
            },
          }}
        >
          <MenuItem onClick={handleClose} component="a" href="#about-me">
            <InfoIcon sx={{ mr: 1 }} />
            About Me
          </MenuItem>
          <MenuItem onClick={handleClose} component="a" href="#projects">
            <BuildIcon sx={{ mr: 1 }} />
            Projects
          </MenuItem>
          <MenuItem onClick={handleClose} component="a" href="#work-history">
            <WorkIcon sx={{ mr: 1 }} />
            Work History
          </MenuItem>
          <MenuItem onClick={handleClose} component="a" href="#contact">
            <ContactMailIcon sx={{ mr: 1 }} />
            Contact
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
