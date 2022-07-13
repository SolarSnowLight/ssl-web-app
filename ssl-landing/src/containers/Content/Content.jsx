import React from "react";
import styles from "./Content.module.css";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

import WebProducts from "./WebProducts";
import Ticker from "./Ticker";
import DesktopProducts from "./DesktopProducts";
import GameDevProducts from "./GameDevProducts";
import Footer from "./Footer";


const Content = () => {
  return (
    <>
     <div className={styles["content"]}>
      <div >
        <h1 data-scroll data-scroll-speed="1">
          <span className={styles["s"]}>
            Solar
            <br />
          </span>
          <span className={styles["sl"]}>Snow Light</span>
        </h1>
        <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
          Создание вашего цифрового контена. Ваш контент, наши цифры.
        </p>
      </div>
      <div>
       
      </div>
   
    </div>

    </>
   
  );
};

export default Content;
