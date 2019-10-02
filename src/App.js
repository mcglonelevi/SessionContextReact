import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SessionContextProvider from './contexts/SessionContext';
import Home from './scenes/Home';
import About from './scenes/About';
import Users from './scenes/Users';

export default function App() {
    return (
        <SessionContextProvider>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                            <   Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </SessionContextProvider>
    );
}
