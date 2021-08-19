import React, { useCallback } from 'react';
import Message from './Message';
import InputForm from './InputForm';
import { Redirect, useParams } from 'react-router';
import { useDispatch, useSelector} from "react-redux";
import { addMessage, addMessageBot } from "./actions/messages";
import { AUTHOR } from './constants/constants';

const useIsChatExists = ({chatId}) => {
    const chats = useSelector(state => state.chats)
    return Boolean(Object.values(chats).find((chat) => chat.id === chatId))
}

const Chat = () => {

    const { chatId } = useParams();

    const profileName = useSelector(state => state.profile.name);

    const messageList = useSelector(state => state.messages[chatId] || []);

    const dispatch = useDispatch();
        
        const handleMessegeSubmit = (newMessagetext) => {
            dispatch(addMessageBot(chatId, {id: `message${Date.now()}`, author: messageList.author !== AUTHOR.ME ? profileName : messageList.author, text: newMessagetext}))
            // setMessagelist((contentMassageList) => 
            // [...contentMassageList, {author: messageList.author !== AUTHOR.ME ? profileName : messageList.author, text: newMessagetext},
            // ])            
        }

        const isChatExist = useIsChatExists({ chatId })

        if (!isChatExist){
            return <Redirect to="/chats" />
        };

    return (
        <div className="chat">
            <div className="App-header__messageList">
                {messageList.map((message) => (
                    
                    <Message key={message.id} 
                    text={message.text} 
                    author={message.author}

                    />
            ))} 
            </div>
            <InputForm onSubmit={handleMessegeSubmit} />
        </div>
    )
}

export default Chat;