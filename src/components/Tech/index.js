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

function Tech() {
  return (
    <div id="tech" className={style.section}>
      <div className={style.titleCont}>
        <h2 className={style.title}>Tech Stack</h2>
        <hr className={style.ul} />
      </div>
      <div className={style.cardCont}>
        <div className={`${style.feCard} ${style.Card}`}>
          <h3 className={style.subTitle}>Front End</h3>
          <div className={style.allIcon}>
            <div className={style.iconCont}>
              <FaReact className={style.icon} />
              <p>React</p>
            </div>
            <div className={style.iconCont}>
              <SiJavascript className={style.icon} />
              <p>Javascript</p>
            </div>
            <div className={style.iconCont}>
              <SiTypescript className={style.icon} />
              <p>Typescript</p>
            </div>
            <div className={style.iconCont}>
              <SiFigma className={style.icon} />
              <p>Figma</p>
            </div>
            <div className={style.iconCont}>
              <FaCss3Alt className={style.icon} />
              <p>CSS 3</p>
            </div>
            <div className={style.iconCont}>
              <FaHtml5 className={style.icon} />
              <p>HTML 5</p>
            </div>
          </div>
        </div>

        <div className={`${style.beCard} ${style.Card}`}>
          <h3 className={style.subTitle}>Back End</h3>
          <div className={style.allIcon}>
            <div className={style.iconCont}>
              <SiTypescript className={style.icon} />
              <p>Typescript</p>
            </div>
            <div className={style.iconCont}>
              <FaNodeJs className={style.icon} />
              <p>Node.JS</p>
            </div>
            <div className={style.iconCont}>
              <AiOutlineConsoleSql className={style.icon} />
              <p>SQL</p>
            </div>
            <div className={style.iconCont}>
              <SiJest className={style.icon} />
              <p>Jest</p>
            </div>
            <div className={style.iconCont}>
              <SiPostgresql className={style.icon} />
              <p>Postgres</p>
            </div>
            <div className={style.iconCont}>
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
