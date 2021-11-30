import React from "react";
import style from "./Input.module.css";

const Input = ({ type, value, setValue, name, placeholder }) => {
  return (
    <div className={style["input-group"]}>
      <label>{placeholder}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        name={name}
        required
      />
    </div>
  );
};

export default Input;
