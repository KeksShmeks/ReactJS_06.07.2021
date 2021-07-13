import './App.css';
import Message from './Message';

const text = 'Добрый вечер!';

function App() {
 return (
   <div className="App">
     <header className="App-header">
       My First React App
       <Message text={text}/>
     </header>
   </div>
 );
}

export default App;