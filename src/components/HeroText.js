import { Fragment } from "react";
import style from "./HeroText.module.css";

const HeroText = () => {
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
      </div>
    </Fragment>
  );
};

export default HeroText;
