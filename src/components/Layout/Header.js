import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src='todo.png' alt='todo logo' />
        <h1>
          <span>Todo</span> App
        </h1>
      </div>
      <nav className={style.navigation}>
        <span>Login</span>
        <span>|</span>
        <span>Register</span>
      </nav>
    </header>
  );
};

export default Header;
