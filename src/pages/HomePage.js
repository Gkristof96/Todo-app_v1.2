import { Fragment, useContext } from "react";
import style from "./HomePage.module.css";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router";
import AuthContext from "../store/auth-context";

const HomePage = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const startHandler = () => {
    authCtx.isLoggedIn ? navigate("/todos") : navigate("/auth/login");
  };
  return (
    <Fragment>
      <div className={style.wrapper}>
        <h1 className={style.title}>
          Do you <span>Forget</span> everything?
        </h1>
        <p className={style.subtitle}>
          With our application, you can keep your tasks in mind. All you have to
          do is register to our app, and you can start write down your tasks.
          Are you interests?{" "}
        </p>
        <Button size='normal' onClick={startHandler}>
          Start Now
        </Button>
      </div>
    </Fragment>
  );
};

export default HomePage;
