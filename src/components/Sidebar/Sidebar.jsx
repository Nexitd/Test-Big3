import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { TeamOutlined, UserOutlined, ImportOutlined } from "@ant-design/icons";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const navigate = useNavigate();
  function getItem(label, key, icon, onClick) {
    return {
      key,
      icon,
      label,
      onClick,
    };
  }

  const items = [
    getItem("Teams", "sub1", <TeamOutlined />, () => navigate("/teams")),
    getItem("Players", "sub2", <UserOutlined />, () => navigate("/players")),
    getItem("Sign out", "sub3", <ImportOutlined />, () => console.log("test")),
  ];

  return (
    <div>
      <Menu
        mode="inline"
        style={{
          width: 140,
        }}
        items={items}
      />
    </div>
  );
};

export default Sidebar;
