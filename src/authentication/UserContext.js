import React, { createContext, useEffect, useState } from "react";
import Login from "../pages/Login/Login";
import { isAuthenticated } from "../services/AuthService";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let user = isAuthenticated();
      if (!user) {
        localStorage.setItem("user", "");
        user = "";
      }

      setCurrentUser(user);
    };

    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      {currentUser ? children : <Login />}
    </UserContext.Provider>
  );
};

export default UserContext;
