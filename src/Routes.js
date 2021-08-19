import React from "react";
import {  Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import Chat from './ChatItem'; 
import ListChats from './ListChats';
import Home from "./Home";
import Profile from "./profile/Profile";


export default function Routes(props) {
    return (
        <React.Fragment>
            <header>
                <ul class="side_bar">
                    <li>
                        <Link to="/profile">profile</Link>
                    </li>

                    <li>
                        <Link to="/chats">chats</Link>
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

                <Route path="/profile" component={Profile}>
                </Route>

                <Route
                    path="/chats/:chatId"
                    component={Chat}
                />

                <Route exact path="/chats" component={ListChats} />

                <Route>
                    <h3>Page not found</h3>
                </Route>
            </Switch>
        </React.Fragment>
    );
}

