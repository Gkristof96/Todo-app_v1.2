import Button from "../UI/Button";
import { Link } from "react-router-dom";
import style from "./Sign.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Input from "../UI/Input";
import ErrorMessage from "../UI/ErrorMessage";
import { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (cpassword !== password) {
      setErrorMessage("Paswords are different");
    } else {
      setErrorMessage("");
      createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          navigate("/todos");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
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
      <Input
        type='password'
        name='cpassword'
        value={cpassword}
        setValue={setCPassword}
        placeholder='Confirm Password'
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Link className={style.link} to='/auth/signin'>
        You have an account?
      </Link>
      <Button type='submit'>Sign Up</Button>
    </form>
  );
};

export default SignUp;
