import React from 'react';
import ReactDOM from 'react-dom/client';

import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './theme';
// import { SnackbarProvider } from 'notistack';
import Routes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    {/* <SnackbarProvider maxSnack={3}> */}
      <Routes />
    {/* </SnackbarProvider> */}
  </ThemeProvider>
);

