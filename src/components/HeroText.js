import { Button } from "@mui/material";
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
        <Button
          variant='outlined'
          sx={{ width: "200px", mt: "25px", color: "#66BFBF" }}
        >
          Start Now
        </Button>
      </div>
    </Fragment>
  );
};

export default HeroText;
