import React from "react";
import style from "./Button.module.css";

const Button = ({ children, type, onClick, disabled }) => {
  return (
    <button
      className={style.btn}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
