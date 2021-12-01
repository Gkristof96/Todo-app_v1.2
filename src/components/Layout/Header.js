import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { useNavigate } from "react-router";
import AuthContext from "../../store/auth-context";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Header = () => {
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        authCtx.logout();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const homeHandler = () => {
    navigate("/");
  };
  return (
    <header className={style.header}>
      <div className={style.logo} onClick={homeHandler}>
        <img src='todo.png' alt='todo logo' />
        <h1>
          <span>Todo</span> App
        </h1>
      </div>
      <nav className={style.navigation}>
        {authCtx.isLoggedIn ? (
          <span onClick={logoutHandler}>Logout</span>
        ) : (
          <Fragment>
            <Link to='/auth/login'>Login</Link>
            <span>|</span>
            <Link to='/auth/signup'>Sign Up</Link>
          </Fragment>
        )}
      </nav>
    </header>
  );
};

export default Header;
