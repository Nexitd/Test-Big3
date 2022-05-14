import React from "react";
import styles from "./Empty.module.css";

const Empty = ({ text, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <h4 className={styles.cardTitle}>Empty here</h4>
      <p className={styles.cardText}>Add new {text} to continue</p>
    </div>
  );
};

export default Empty;


