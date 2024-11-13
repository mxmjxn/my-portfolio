// src/components/Projects.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import projectsData from '../data/projectsData';
import ProjectCard from './ProjectCard'; // Import the new component

const Projects = () => (
  <Container id="projects" sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>
      Projects
    </Typography>
    <Grid container spacing={4}>
      {projectsData.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;
