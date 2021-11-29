import React, { useContext, useState } from "react";
import style from "./Sign.module.css";
import Button from "../UI/Button";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../../store/auth-context";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        authCtx.login(cred._tokenResponse.idToken);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  console.log(authCtx.isLoggedIn);
  return (
    <div className={style.card}>
      <h1>Sign Up</h1>
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
    </div>
  );
};

export default SignIn;
