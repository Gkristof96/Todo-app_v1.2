import React, { useContext, useState } from "react";
import style from "./Sign.module.css";
import Button from "../UI/Button";
import AuthContext from "../../store/auth-context";

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
      <input
        type='email'
        name='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type='password'
        name='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button type='submit'>Sign In</Button>
    </form>
  );
};

export default Login;
