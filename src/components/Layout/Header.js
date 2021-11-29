import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { useNavigate } from "react-router";

const Header = ({ loggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
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
        {loggedIn ? (
          <span onClick={() => setIsLoggedIn(false)}>Logout</span>
        ) : (
          <Fragment>
            <Link to='/signin'>Login</Link>
            <span>|</span>
            <Link to='/signup'>Register</Link>
          </Fragment>
        )}
      </nav>
    </header>
  );
};

export default Header;
