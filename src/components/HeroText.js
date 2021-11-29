import { Fragment } from "react";
import style from "./HeroText.module.css";
import Button from "./UI/Button";
import { useNavigate } from "react-router";

const HeroText = () => {
  const navigate = useNavigate();
  const toTodos = () => {
    console.log("mivan öcsém");
    navigate("/todos");
    console.log("nem értem");
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

export default HeroText;
