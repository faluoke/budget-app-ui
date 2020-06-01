import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { UserProvider } from "./components/Context/UserContext";
import "./App.scss";

export const UserContext = React.createContext([]);

export default function App() {
  return (
    <UserProvider>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={Registration} />
        <ProtectedRoute exact path="/app" component={Dashboard} />
      </Switch>
    </UserProvider>
  );
}
