import React, { useState } from "react";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((cred) => {
        setToken(cred._tokenResponse.idToken);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        setToken(null);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
