import React from "react";
import style from "./Button.module.css";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button className={style.btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
