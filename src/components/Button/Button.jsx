import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, type, width, margin }) => {
  return (
    <button
      className={styles.btn}
      type={type}
      style={{ width: width, margin: margin }}
    >
      {text}
    </button>
  );
};

export default Button;
