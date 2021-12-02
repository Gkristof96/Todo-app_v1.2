import React from "react";
import style from "./Button.module.css";

const Button = ({ children, type, onClick, disabled, variant, size }) => {
  return (
    <button
      className={`${style.btn} ${style[`${variant}`]} ${style[`${size}`]}`}
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
  variant: "outlined",
  size: "normal",
};

export default Button;
