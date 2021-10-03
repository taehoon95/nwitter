import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import { Redirect } from "react-router";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                    <>
                    <Route exact path = "/">
                        <Home/>
                    </Route>
                    <Route exact path = "/Profile">
                        <Profile/>
                    </Route>
                    <Redirect from ="*" to ="/"></Redirect>
                </>
                )
                :(
                <>
                    <Route exact path = "/">
                        <Auth />    
                    </Route>
                    <Redirect from ="*" to ="/"></Redirect>
                </>
                )};
            </Switch>
        </Router>
    )
};

export default AppRouter;