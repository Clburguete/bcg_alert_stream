import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "./constants";


const Routes = () => (
  <Router>
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
