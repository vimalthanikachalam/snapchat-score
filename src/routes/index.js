import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import PageNotFound from "../pages/404";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route default component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
