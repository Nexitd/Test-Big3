import React from "react";
import notFound from "../../assets/images/NotFound/illustration.png";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerItem}>
        <img src={notFound} alt="" />
        <h4 className={styles.containerTitle}>Page not found</h4>
        <p className={styles.containerText}>
          Sorry, we can't find what you're looking for
        </p>
      </div>
    </div>
  );
};

export default NotFound;
