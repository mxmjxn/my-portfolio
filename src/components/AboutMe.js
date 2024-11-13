// src/components/AboutMe.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutMe = () => (
  <Container id="about-me" style={{ padding: '2rem 0' }}>
    <Typography variant="h4" gutterBottom>
      About Me
    </Typography>
    <Typography variant="body1">
      Write a brief introduction about yourself here.
    </Typography>
  </Container>
);

export default AboutMe;
