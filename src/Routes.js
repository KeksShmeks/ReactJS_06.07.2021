import React from "react";
import {  Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import Chat from './ChatItem'; 
import ListChats from './ListChats';
import Home from "./Home";
import Profile from "./Profile";


export default function Routes(props) {
    return (
        <React.Fragment>
            <header>
                <ul>
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
                    {/* <Profile /> */}
                </Route>

                <Route
                    path="/chats/:chatId"
                    render={() => {
                    return (
                    <div>
                        <Chat />
                    </div>
                    )
                }}/>

                <Route exact path="/chats" component={ListChats} />

                <Route>
                    <h3>Page not found</h3>
                </Route>
            </Switch>
        </React.Fragment>
    );
}

