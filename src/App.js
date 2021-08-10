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
 //     id1: {
    //         name: "Chat1",
    //     },
    //     id2: {
    //         name: "Chat2",
    //     }

    // });


 



function App() {
  const [ chats, setChats] = React.useState([
    { id: 'Chat1', name: "Чат 1" },
    { id: "Chat2", name: "Чат 2" },
    { id: "Chat3", name: "Чат 3" },
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
      {/* <header className="App-header"> */}
        <Routes getIsChatExists={handleIsChatExists} currentChat={currentChat} onCurrenChatChange={handeleChangeChat} chats={chats} />
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