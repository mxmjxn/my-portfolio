// src/theme.js
import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (mode) => {
    const greenAccent = {
        light: '#69F0AE',
        main: '#00E676',
        dark: '#00C853',
        contrastText: '#ffffff',
      };
      
      const blueAccent = {
        light: '#82B1FF',
        main: '#448AFF',
        dark: '#2979FF',
        contrastText: '#ffffff',
      };

  return {
    palette: {
      mode,
      primary: mode === 'dark' ? greenAccent : blueAccent,
      secondary: mode === 'dark' ? blueAccent : greenAccent,
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1d1d1d',
      },
      text: {
        primary: mode === 'light' ? '#000000' : '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Montserrat, Arial, sans-serif',
    },
    shape: {
        borderRadius: 12, // Increase this value for more rounded corners
    },
  };
};
