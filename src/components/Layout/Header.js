import React, { Fragment } from "react";
import style from "./Header.module.css";

const Header = ({ loggedIn, setIsLoggedIn }) => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src='todo.png' alt='todo logo' />
        <h1>
          <span>Todo</span> App
        </h1>
      </div>
      <nav className={style.navigation}>
        {loggedIn ? (
          <span onClick={() => setIsLoggedIn(false)}>Logout</span>
        ) : (
          <Fragment>
            <span onClick={() => setIsLoggedIn(true)}>Login</span>
            <span>|</span>
            <span>Register</span>
          </Fragment>
        )}
      </nav>
    </header>
  );
};

export default Header;
