import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Layout, NavBar } from "./../components";

import { ROUTES } from "./constants";


const Routes = () => (
  <Router>
    <NavBar/>
    <Layout>
      <Switch>
        {
          ROUTES.map(route => (
            <Route key={route.path} {...route}/>
          ))
        }
        <Redirect to={"/home"}/>
      </Switch>
    </Layout>
  </Router>
);

export {
  Routes
}
