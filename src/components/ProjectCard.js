// src/components/ProjectCard.js
import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const ProjectCard = ({ project }) => (
  <MotionCard
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <CardMedia
      component="img"
      height="140"
      image={project.imageUrl}
      alt={project.title}
    />
    <CardContent>
      <Typography variant="h5">{project.title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {project.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary" href={project.projectUrl} target="_blank">
        View Project
      </Button>
    </CardActions>
  </MotionCard>
);

export default ProjectCard;
