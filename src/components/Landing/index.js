import React from "react";
import style from "./Landing.module.css";
// import FadeIn from "react-fade-in";

function Landing() {
  return (
    <div className={style.section}>
      <nav className={style.navbar}>
        <ul className={style.navItems}>
          <li className={style.links}>Projects</li>
          <li>~</li>
          <li className={style.links}>Tech</li>
          <li>~</li>
          <li className={style.links}>Contact</li>
        </ul>
        <h3 className={style.construction}>~Under Construction~</h3>
      </nav>
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
  );
}

export default Landing;
