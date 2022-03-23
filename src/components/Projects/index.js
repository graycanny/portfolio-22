import React from "react";
import style from "./Projects.module.css";
import YoutubeEmbed from "../YoutubeEmbed";

function Projects() {
  const videoId = "VHPkxwTgddA";
  return (
    <div className={style.section}>
      <h2 className={style.title}>Projects</h2>
      <div className={style.projCont}>
        <div className={style.videoCont}>
          <YoutubeEmbed videoId={videoId} />
        </div>
        <div className={style.textCont}>
          <img
            className={style.logo}
            src={require("../../img/pinit-logo-offwhite 2.png")}
            alt="Pinit logo"
          />{" "}
          <div className={style.smallText}>
            <p className={style.copy}>
              Pinit is a full stack application created as part of a four-week
              hackathon. A social photo-sharing app based on albums and pictures
              linked to places, friends and family. It was created in a team of
              six, adhering to agile principles and a rotating product owner.
            </p>
            <ul className={style.feList}>
              <p>Front-end</p>
              <li>React</li>
              <li>MapBox</li>
              <li>Auth0</li>
              <li>Cloudinary</li>
              <li>Netlify</li>
            </ul>
            <ul className={style.beList}>
              <p>Back-end</p>
              <li>Node.JS</li>
              <li>PostGres</li>
              <li>Auth0</li>
              <li>Heroku</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
