import React from "react";
import style from "./Landing.module.css";
//! import { useLocomotiveScroll } from "react-locomotive-scroll";

function Landing() {
  //! const { scroll } = useLocomotiveScroll();
  return (
    <div data-scroll-section className={style.section}>
      <nav className={style.navbar}>
        <ul className={style.navItems}>
          <a href="#projects">
            <li className={style.links}>Projects</li>
          </a>
          <li>~</li>
          <a href="#tech">
            <li className={style.links}>Tech</li>
          </a>
          <li>~</li>
          <a href="#contact">
            <li className={style.links}>Contact</li>
          </a>
        </ul>
      </nav>
      <div className={style.heroCont}>
        <div className={style.imgCont}>
          <img
            className={style.img}
            src={require("../../img/landingBlob.png")}
            alt=""
          />
        </div>
        <div>
          <h1 className={style.heroText}>
            Full-Stack
            <br />
            software
            <br />
            design and
            <br />
            development
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;
