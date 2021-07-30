import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import Chat from './ChatItem'; 
import ListChats from './ListChats';
import Home from "./Home";
import Profile from "./Profile";


export default function Routes() {
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
            exact
            path="/chats"
        >
            <ListChats />
            <Chat />
        </Route>
   
        </Switch>
        </>

    );
}

