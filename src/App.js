/* eslint-disable react-hooks/rules-of-hooks */
import './App.css';
import React from 'react';
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

  const [ chats, setChats] = React.useState([
    { id: 'chat1', name: "Чат 1" },
    { id: "chat2", name: "Чат 2" },
    { id: "chat3", name: "Чат 3" },
]);

const [ currentChat, setCurrentChat ] = React.useState(chats)

const handeleChangeChat = (chat) => setCurrentChat(chat)

const handleIsChatExists = React.useCallback(
(chatId) => {
  return Boolean(chats.find((chat) => chat.id === chatId))
}, [chats])
  
  return (
  <ThemeProvider theme={theme}>
    <div className="App">
        <Routes getIsChatExists={handleIsChatExists} currentChat={currentChat} onCurrenChatChange={handeleChangeChat} chats={chats} />
    </div>
  </ThemeProvider >
  );
}

export default App;