import React from "react";
import {  Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import Chat from './ChatItem'; 
import ListChats from './ListChats';
import Home from "./Home";
import Profile from "./Profile";


export default function Routes(props) {
    return (
        <>
    <header>
    <ul>
        <li>
            <Link to="/profile">profile</Link>
        </li>

        <li>
            <Link to="/chats/:chatId">chats</Link>
        </li>

        <li>
            <Link to="/">Home</Link>
        </li>
    </ul>
    </header>
    
        <Switch>
   
        <Route exact path="/">
            <Home />
        </Route>
   
        <Route path="/profile">
            <Profile />
        </Route>
   
        <Route
            path="/chats/:chatId"
         render={() => {
            console.log({props})
             return <ListChats chats={props.chats} currentChat={props.currentChat} onCurrenChatChange={props.onCurrenChatChange} getIsChatExists={props.getIsChatExists} />
         }
        }
        >
            {/* <ListChats chats={props.chats} currentChat={props.currentChat} onCurrenChatChange={props.onCurrenChatChange} getIsChatExists={props.getIsChatExists} /> */}
            {/* <Chat getIsChatExists={props.getIsChatExists}/> */}
        </Route>

        <Route>
            <h3>Page not found</h3>
        </Route>
   
        </Switch>
        </>

    );
}

