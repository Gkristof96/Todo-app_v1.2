import { useState, createContext } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const unsubAuth = onAuthStateChanged(auth, (user) => {
    if (user) {
      setToken(user.accessToken);
    }
  });

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    unsubAuth();
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
