/* eslint-disable react-hooks/rules-of-hooks */
import './App.css';
import React from 'react';
import Routes from './Routes';

import {
  ThemeProvider, createTheme
} from "@material-ui/core/styles";



function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2196f3",
      },
  
      common: {
        type: 'light',
      },
    },
  });
  
  return (
  <ThemeProvider theme={theme}>
    <div className="App">
        <Routes  
        />
    </div>
  </ThemeProvider >
  );
}

export default App;