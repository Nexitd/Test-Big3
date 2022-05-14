import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import logo from "../../assets/images/Header/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <img src={logo} alt="" />
        <div className={styles.headerItem}>
          <span className={styles.headerText}>text</span>
          <Avatar size={36} icon={<UserOutlined />} />
        </div>
      </div>
    </header>
  );
};

export default Header;
