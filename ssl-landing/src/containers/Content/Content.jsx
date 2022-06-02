import React from "react";
import styles from "./Content.module.css";

import WebProducts from "./WebProducts";
import Ticker from "./Ticker";
import DesktopProducts from "./DesktopProducts";
import GameDevProducts from "./GameDevProducts";
import Footer from "./Footer";

import solar from "../../resources/img/solar.svg";
import snow_light from "../../resources/img/snow_light.svg";

const Content = () => {
  return (
    <div className={styles["content"]}>
      <div className={styles["name"]}>
        <img className={styles["name_solar"]} src={solar} />
        <img src={snow_light} />
      </div>
      <h3 className={styles["sub-text"]}>
        {" "}
        Создание вашего цифрового контена.
        <br />
        Ваш контент, наши цифры.
      </h3>
      <Ticker />
      <div className={styles["item-text"]}>
        <h1 className={styles["item-text-h1"]}>
          Разработка веб-сайтов, <br /> десктопных приложений и игр
        </h1>
        <div className={styles["item-text-sub"]}>
          Мы молодая быстрорастущая компания.
          <br />
          Наша специальность - все и еще чуть-чуть. <br />
          Среди готовых продуктов представлены как и наши <br />
          стартапы так и сделанные на заказ.
        </div>
      </div>
      <WebProducts />
      <Ticker />
      <DesktopProducts />
      <Ticker />
      <Footer />
    </div>
  );
};

export default Content;
