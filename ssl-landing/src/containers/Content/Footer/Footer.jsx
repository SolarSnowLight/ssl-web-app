import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer_down"]} id="down">
      <a href="" className={styles["footer_email-btn"]}>
        {" "}
        SEND EMAIL
      </a>
      <div className={styles["footer"]}>
        <div className={styles["item-footer"]}>
          <h3>Контакты</h3>
          <a href=" ">swdan.ov@gmail.ru</a>
          <a>+79526139159</a>
        </div>
        <div className={styles["item-footer"]}>
          <h3>Местоположение</h3>
          <a href="https://www.google.pl/maps/place/%D1%83%D0%BB.+%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D0%BA%D0%B0+%D0%9A%D1%83%D1%80%D1%87%D0%B0%D1%82%D0%BE%D0%B2%D0%B0,+13,+%D0%98%D1%80%D0%BA%D1%83%D1%82%D1%81%D0%BA,+%D0%98%D1%80%D0%BA%D1%83%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+664074/@52.2568219,104.2641641,17z/data=!3m1!4b1!4m5!3m4!1s0x5da82352b361e3cf:0x250012cdb789df7d!8m2!3d52.2568219!4d104.2663528?hl=ru&authuser=0">
            Россия, Иркутская область, г. Иркутск, <br /> ул. Академика
            Курчатова 13
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
