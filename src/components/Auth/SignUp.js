import Button from "../UI/Button";
import style from "./Sign.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (cpassword !== password) {
      console.log("nem egyezik a confirm");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          console.log("user created: ", cred.user);
          navigate("/signin");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
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
      <input
        type='password'
        name='cpassword'
        value={cpassword}
        onChange={(event) => setCPassword(event.target.value)}
      />
      <Button type='submit'>Sign Up</Button>
    </form>
  );
};

export default SignUp;
