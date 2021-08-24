import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import InputForm from './InputForm';
import { Button } from '@material-ui/core';
import { addChat, deleteChat } from './actions/chats';

function ListChats() {

const history = useHistory()

const chats = useSelector(state => state.chats);

const handlerChatLinkCklick = chat => {
    history.push(`/chats/${chat.id}`) 
}

const dispatch = useDispatch()

const handelAddChat = (nameChat) => {
    dispatch(addChat(`chat${Date.now()}`, nameChat))
}

const handelRemoveChat = (chatId) => {
    dispatch(deleteChat(chatId))
    console.log('handelRemoveChat', chatId)
}

    return (
        <React.Fragment>
            <div>
                <List className="app__sidebar" subheader="Список чатов">
                {Object.values(chats).map((chat) => (
                    <div key={chat.id}>
                        <ListItem button onClick={() => handlerChatLinkCklick (chat)}>{chat.name}</ListItem>
                        <Button onClick={() => handelRemoveChat(chat.id)}>УДАЛИТЬ</Button>
                    </div>
                ))}
                </List>
            </div>
            <InputForm lable='Имя чата' placeholder='Введите название' onSubmit={handelAddChat} />
        </React.Fragment>

    )
}

export default ListChats;