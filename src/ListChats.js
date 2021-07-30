import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useParams } from 'react-router-dom';

function ListChats() {
    const { chatId } = useParams();

    const [ chats, setChats] = React.useState({
        id1: {
            name: "Chat1",
        },
        id2: {
            name: "Chat2",
        }

    });


    //     { id: 'Chat1', name: "Чат 1" },
    //     { id: "Chat2", name: "Чат 2" },
    //     { id: "Chat3", name: "Чат 3" },
    // ]);
    
    const [ currentChat, setCurrentChat ] = React.useState(chats)
    
    const handeleChangeChat = (chat) => setCurrentChat(chat)

    return (
        <List className="app__sidebar" subheader="Список чатов">
        {chats.map((chat) => (
            <ListItem button selected={chat.id === currentChat.id} onClick={() => handeleChangeChat(chat)}>{chat.name}</ListItem>
        )
        )}
        
    </List>
    )
}

export default ListChats;