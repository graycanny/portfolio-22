import React from "react";
import style from "./Tech.module.css";
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiFigma,
  SiPostgresql,
  SiJest,
} from "react-icons/si";
import { AiOutlineConsoleSql, AiOutlineApi } from "react-icons/ai";
//! import { useLocomotiveScroll } from "react-locomotive-scroll";

function Tech() {
  //! const { scroll } = useLocomotiveScroll();
  return (
    <div
      data-scroll-section
      id="tech"
      //! scroll={scroll}
      className={style.section}
    >
      <div className={style.titleCont}>
        <h2 className={style.title}>Tech Stack</h2>
        <hr className={style.ul} />
      </div>
      <div className={style.cardCont}>
        <div className={`${style.feCard} ${style.Card}`}>
          <h3 className={style.subTitle} data-scroll data-scroll-speed="0.5">
            Front End
          </h3>
          <div className={style.allIcon}>
            <div className={style.iconCont} data-scroll data-scroll-speed="0.5">
              <FaReact className={style.icon} />
              <p>React</p>
            </div>
            <div className={style.iconCont} data-scroll data-scroll-speed="0.5">
              <SiJavascript className={style.icon} />
              <p>Javascript</p>
            </div>
            <div className={style.iconCont} data-scroll data-scroll-speed="0.5">
              <SiTypescript className={style.icon} />
              <p>Typescript</p>
            </div>
            <div className={style.iconCont} data-scroll data-scroll-speed="0.5">
              <SiFigma className={style.icon} />
              <p>Figma</p>
            </div>
            <div className={style.iconCont} data-scroll data-scroll-speed="0.5">
              <FaCss3Alt className={style.icon} />
              <p>CSS 3</p>
            </div>
            <div className={style.iconCont} data-scroll data-scroll-speed="0.5">
              <FaHtml5 className={style.icon} />
              <p>HTML 5</p>
            </div>
          </div>
        </div>

        <div className={`${style.beCard} ${style.Card}`}>
          <h3 className={style.subTitle} data-scroll data-scroll-speed="0.5">
            Back End
          </h3>
          <div className={style.allIcon}>
            <div className={style.iconCont} data-scroll data-scroll-speed="0.5">
              <SiTypescript className={style.icon} />
              <p>Typescript</p>
            </div>
            <div className={style.iconCont} data-scroll data-scroll-speed="0.5">
              <FaNodeJs className={style.icon} />
              <p>Node.JS</p>
            </div>
            <div className={style.iconCont} data-scroll data-scroll-speed="0.5">
              <AiOutlineConsoleSql className={style.icon} />
              <p>SQL</p>
            </div>
            <div className={style.iconCont} data-scroll data-scroll-speed="0.5">
              <SiJest className={style.icon} />
              <p>Jest</p>
            </div>
            <div className={style.iconCont} data-scroll data-scroll-speed="0.5">
              <SiPostgresql className={style.icon} />
              <p>Postgres</p>
            </div>
            <div className={style.iconCont} data-scroll data-scroll-speed="0.5">
              <AiOutlineApi className={style.icon} />
              <p>REST API</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech;
