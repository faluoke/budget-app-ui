import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import "./App.sass";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/app" component={Dashboard} />
    </Switch>
  );
}
