import React from 'react';
import { Container, IconButton, Box } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme(); // Access the theme object

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper, // Use theme background
        py: 2,
      }}
    >
      <Container sx={{ textAlign: 'center' }}>
        <IconButton
          href="https://github.com/yourusername"
          target="_blank"
          color="inherit"
        >
          <GitHub />
        </IconButton>
        <IconButton
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          color="inherit"
        >
          <LinkedIn />
        </IconButton>
      </Container>
    </Box>
  );
};

export default Footer;
