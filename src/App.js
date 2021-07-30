/* eslint-disable react-hooks/rules-of-hooks */
import './App.css';
import React from 'react';
import Chat from './ChatItem'; 
import ListChats from './ListChats';
import Routes from './Routes';

import {
  ThemeProvider, createTheme
} from "@material-ui/core/styles";

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



function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <header className="App-header"> */}
        <Routes />
        {/* <ListChats />
        <div className="app_contain">
          <Chat />
        </div> */}
    {/* </header> */}
  </div>
  </ThemeProvider >
  );
}

export default App;