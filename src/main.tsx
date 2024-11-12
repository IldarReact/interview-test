import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import theme from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element with id 'root' not found.");
}
