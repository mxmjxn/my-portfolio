// src/components/Project.js
import React from 'react';

const Project = ({ title, description, imageUrl, projectUrl }) => (
  <div className="project">
    <img src={imageUrl} alt={`${title} screenshot`} />
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={projectUrl} target="_blank" rel="noopener noreferrer">
      View Project
    </a>
  </div>
);

export default Project;
