import React, { useCallback } from 'react';
import Message from './Message';
import InputForm from './InputForm';
import { Redirect, useParams } from 'react-router';
import { useDispatch, useSelector} from "react-redux";
import { addMessage } from "./actions/messages";
import { AUTHOR } from './constants/constants';

// const AUTHOR = {
//     ME: 'Me',
//     BOT: 'Bot'
// }

const useIsChatExists = ({chatId}) => {
    const chats = useSelector(state => state.chats)
    return Boolean(Object.values(chats).find((chat) => chat.id === chatId))
}

const Chat = () => {
    // const { getIsChatExists } = props;

    const { chatId } = useParams();

    // const isChatExist = React.useMemo(() => getIsChatExists(chatId), [ getIsChatExists , chatId])

    const profileName = useSelector(state => state.profile.name);

    const messageList = useSelector(state => state.messages[chatId] || []);



    // const [messageList, setMessagelist] = React.useState([]);
    

    const dispatch = useDispatch();

    // const onAddMessage = (message) => {
    //     dispatch(addMessage(chatId, message));
    // }


    // const timer = React.useRef(null);

    // React.useEffect(() => {
    //     if(
    //     messageList.length &&
    //     messageList[messageList.length - 1].author !== AUTHOR.BOT){
    //         timer.current = setTimeout((  
    //         ) => {
    //         setMessagelist(contentMassageList => ([...contentMassageList, {author: AUTHOR.BOT, text: "Привет"}])
    //         )}, 1500)
    //         }
    //     }, [messageList])

    //     React.useEffect( ()=> {
    //         return () => {
    //             clearTimeout(timer.current)
    //         }
    //         },[]
    //     )
        
        const handleMessegeSubmit = (newMessagetext) => {
            dispatch(addMessage(chatId, {id: `message${Date.now()}`, author: messageList.author !== AUTHOR.ME ? profileName : messageList.author, text: newMessagetext}))
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