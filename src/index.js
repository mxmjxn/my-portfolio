// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { getDesignTokens } from './theme';
import { ColorModeProvider, ColorModeContext } from './components/ColorModeContext';

const Root = () => (
  <ColorModeProvider>
    <ColorModeContext.Consumer>
      {({ mode }) => (
        <ThemeProvider theme={createTheme(getDesignTokens(mode))}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      )}
    </ColorModeContext.Consumer>
  </ColorModeProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
