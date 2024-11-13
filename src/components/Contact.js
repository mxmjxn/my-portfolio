// src/components/Contact.js
import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => (
  <Container id="contact" style={{ padding: '2rem 0' }}>
    <Typography variant="h4" gutterBottom>
      Contact Me
    </Typography>
    <form
      noValidate
      autoComplete="off"
      action="https://formspree.io/f/your-form-id"
      method="POST"
    >
      <TextField
        label="Name"
        name="name"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Email"
        name="_replyto"
        type="email"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Message"
        name="message"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Send Message
      </Button>
    </form>
  </Container>
);

export default Contact;
