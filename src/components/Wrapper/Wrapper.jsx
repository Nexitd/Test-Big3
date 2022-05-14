import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.containerItem}>{children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
