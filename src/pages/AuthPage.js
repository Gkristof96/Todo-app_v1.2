import { Routes, Route, Navigate } from "react-router";
import SignUp from "../components/Auth/SignUp";
import Login from "../components/Auth/Login";
import style from "./AuthPage.module.css";

const AuthPage = () => {
  const isLoginActive = true;
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
