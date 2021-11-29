import { useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router";
import SignUp from "../components/Auth/SignUp";
import Login from "../components/Auth/Login";
import style from "./AuthPage.module.css";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [isLoginActive, setIsLoginActive] = useState(true);
  return (
    <div className={style.card}>
      {isLoginActive && <h1>Login</h1>}
      {!isLoginActive && <h1>Sign up</h1>}
      <Routes>
        <Route path='/*' element={<Navigate to='/auth/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AuthPage;
