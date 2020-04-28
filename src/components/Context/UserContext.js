import React, { useState, createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const [user, setUser] = useState({
    authenticated: false,
    token: localStorage.getItem("userInfo"),
    userId: "",
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
