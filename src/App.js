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

//   const [ chats, setChats] = React.useState([
//     { id: 'chat1', name: "Чат 1" },
//     { id: "chat2", name: "Чат 2" },
//     { id: "chat3", name: "Чат 3" },
// ]);

// const [ currentChat, setCurrentChat ] = React.useState(chats)

// const handeleChangeChat = (chat) => setCurrentChat(chat)

// const handleIsChatExists = React.useCallback(
// (chatId) => {
//   return Boolean(chats.find((chat) => chat.id === chatId))
// }, [chats])

// const handelAddChat = (chatName) => {
//   console.log('handelAddChat', chatName)
//   setChats((currentChat) => [...currentChat, {name: chatName, id: `chat${Date.now()}`}])
// }

// const handelRemoveChat = (chatId) => {
//   setChats(currentChat => currentChat.filter((chat) => chat.id !== chatId))
// }
  
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