import { Fragment } from "react";
import style from "./HomePage.module.css";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  const toTodos = () => {
    navigate("/todos");
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
        <Button onClick={toTodos}>Start Now</Button>
      </div>
    </Fragment>
  );
};

export default HomePage;
