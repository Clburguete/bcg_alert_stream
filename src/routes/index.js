import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { NavBar } from "@components";

import { ROUTES } from "./constants";


const Routes = () => (
  <Router>
    <NavBar/>
    <Switch>
      {
        ROUTES.map(route => (
          <Route key={route.path} {...route}/>
        ))
      }
      <Redirect to={"/home"}/>
    </Switch>
  </Router>
);

export {
  Routes
}
