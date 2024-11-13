// src/components/WorkHistory.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import workData from '../data/workData';

const WorkHistory = () => (
  <Container id="work-history" style={{ padding: '2rem 0' }}>
    <Typography variant="h4" gutterBottom>
      Work History
    </Typography>
    <Timeline position="alternate">
      {workData.map((work, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {index < workData.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">{work.company}</Typography>
            <Typography variant="subtitle1">{work.role}</Typography>
            <Typography variant="body2" color="text.secondary">
              {work.duration}
            </Typography>
            <Typography variant="body1">{work.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Container>
);

export default WorkHistory;
