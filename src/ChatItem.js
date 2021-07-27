/* eslint-disable no-unused-vars */
import React from 'react';
import Message from './Message';
import InputForm from './InputForm';

const AUTHOR = {
    ME: 'Me',
    BOT: 'Bot'
}

const Chat = () => {
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