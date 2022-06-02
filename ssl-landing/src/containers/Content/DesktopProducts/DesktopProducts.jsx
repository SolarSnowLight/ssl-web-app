import React from "react";
import styles from "./DesktopProducts.module.css";

import desktop from "../../../resources/img/desktop.svg";
import desktop_5dim from "../../../resources/img/desktop_5dim.svg";
import desktop_netman from "../../../resources/img/desktop_netman.svg";

const DesktopProducts = () => {
  return (
    <div className={styles["item-web"]}>
    <div className={styles["product-name"]}>
      Products
      <img src={desktop} />
    </div>
    <div className={styles["container"]}>
      <div className={styles["content-p"]}>
        <div className={styles["child"]}>
          <div className={styles["child-text"]}>
            <p></p>
            <h2>Netman</h2>
          </div>
          <img className={styles["child-img"]} src={desktop_netman}/>
        </div>
        <div className={styles["child"]}>
          <div className={styles["child-text"]}>
            <p></p>
            <h2>5 Измерение</h2>
          </div>
          <img className={styles["child-img"]} src={desktop_5dim}/>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DesktopProducts;
