import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./Context/UserContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.authenticated) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};
