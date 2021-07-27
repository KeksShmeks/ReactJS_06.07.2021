import './App.css';
import Message from './Message';
import React from 'react';


// const text = 'Добрый вечер!';
const AUTHOR = {
    ME: 'Me',
    BOT: 'Bot'
}

function App() {
  const [messageList, setMessagelist] = React.useState([]);

  const [inputValue, setInputValue] = React.useState(''); 

  React.useEffect(() => {
    
    if(
      messageList.length &&
      messageList[messageList.length - 1].author !== AUTHOR.BOT){
        setTimeout((
          
        ) => {
          setTimeout(() => {
            setMessagelist(contentMassageList => ([...contentMassageList, {author: AUTHOR.BOT, text: "Как дела?"}])
          )}, 1000)
          setMessagelist(contentMassageList => ([...contentMassageList, {author: AUTHOR.BOT, text: "Привет"}])
        )}, 1500)
        }
    }, [messageList])
  
  const handelMessageChange = (event) => {
    setInputValue(event.target.value)
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();

    setMessagelist(contentMassageList => ([...contentMassageList, {author: AUTHOR.ME, text: inputValue}]),
    setInputValue(''))

  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header__messageList">
          {messageList.map((message, index) => (
          <Message key={index} text={message.text} author={message.author}/>
          ))} 
        </div>
       <form className="App-header__form" onSubmit={handleMessageSubmit}>
         <input required className="form_input"
         onChange={handelMessageChange}
         value={inputValue}
         />
         <button className="form_button">Отправить</button>
       </form>
     </header>
   </div>
  );
}

export default App;