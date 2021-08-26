import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AppContainer from '../components/AppContainer/index'
// import asyncComponent from "util/asyncComponent";

const Routes = ({ match }) => (
    <Router>
        <Switch>
          <Route exact path="/">
            <AppContainer />
          </Route>
        </Switch>
    </Router>
);

export default Routes;
