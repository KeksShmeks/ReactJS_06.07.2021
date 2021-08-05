import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useHistory } from 'react-router-dom';

function ListChats(props) {
    
const { currentChat, onCurrenChatChange, chats} = props;

const history = useHistory()

const handlerChatLinkCklick = chat => {
    onCurrenChatChange(chat)
    history.push(`/chats/${chat.id}`) 
}

    return (
        <List className="app__sidebar" subheader="Список чатов">
        {chats.map((chat) => (
            <ListItem key={chat.id} button selected={chat.id === currentChat.id} onClick={() => handlerChatLinkCklick (chat)}>{chat.name}</ListItem>
        )
        )}
    </List>
    )
}

export default ListChats;