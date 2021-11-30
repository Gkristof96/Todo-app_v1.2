import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Sign.module.css";
import Button from "../UI/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.login({ email, password });
  };
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input
        type='email'
        name='email'
        value={email}
        setValue={setEmail}
        placeholder='Email'
      />
      <Input
        type='password'
        name='password'
        value={password}
        setValue={setPassword}
        placeholder='Password'
      />
      <Link className={style.link} to='/auth/signup'>
        Don't have an account?
      </Link>
      <Button type='submit'>Sign In</Button>
    </form>
  );
};

export default Login;
