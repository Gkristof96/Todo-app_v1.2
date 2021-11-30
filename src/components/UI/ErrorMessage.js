import React from "react";
import style from "./ErrorMessage.module.css";

const ErrorMessage = ({ children }) => {
  return <p className={style.message}>{children}</p>;
};

export default ErrorMessage;
