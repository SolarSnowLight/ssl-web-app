import { useEffect, useState, useContext } from "react";
import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

import logo from "../../resources/icons/ssl.svg";
import menu from "../../resources/icons/menu.svg";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className={styles["container"]}>
      <img  className={styles["logo"]} src={logo} />
      <div className={styles["right-btn"]}>
          <button className={styles["lg-btn"]}>EN</button>
          <button className={styles["lg-btn"]}>Ru</button>
          <button className={styles["lg-btn"]}>中国人</button>
        </div>
    </div>
  );
};

export default Navbar;
