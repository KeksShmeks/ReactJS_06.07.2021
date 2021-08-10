/* eslint-disable no-unused-vars */
import React from 'react';
import Message from './Message';
import InputForm from './InputForm';
import { Redirect, useParams } from 'react-router';

const AUTHOR = {
    ME: 'Me',
    BOT: 'Bot'
}

const Chat = (props) => {
    const { getIsChatExists } = props;

    // eslint-disable-next-line no-undef
    const { chatId } = useParams();

    const isChatExist = React.useMemo(() => getIsChatExists(chatId), [ getIsChatExists , chatId])

    

    const [messageList, setMessagelist] = React.useState([]);

    const timer = React.useRef(null);

    React.useEffect(() => {
        if(
        messageList.length &&
        messageList[messageList.length - 1].author !== AUTHOR.BOT){
            timer.current = setTimeout((  
            ) => {
            // setTimeout(() => {
            //     setMessagelist(contentMassageList => ([...contentMassageList, {author: AUTHOR.BOT, text: "Как дела?"}])
            // )}, 1000)
            setMessagelist(contentMassageList => ([...contentMassageList, {author: AUTHOR.BOT, text: "Привет"}])
            )}, 1500)
            }
        }, [messageList])

        React.useEffect( ()=> {
            return () => {
                clearTimeout(timer.current)
            }
            },[]
        )
        
        const handleMessegeSubmit = (newMessagetext) => {
            setMessagelist((contentMassageList) => 
            [...contentMassageList, {author: AUTHOR.ME, text: newMessagetext},
            ])
        }

        if (!isChatExist){
            return <Redirect to="/profile" />
        };

    return (
        <div className="chat">
            <div className="App-header__messageList">
            {messageList.map((message, index) => (
            <Message key={index} text={message.text} author={message.author}/>
            ))} 
            </div>
            <InputForm onSubmit={handleMessegeSubmit} />
        </div>
    )
}

export default Chat;