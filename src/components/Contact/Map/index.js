import React from "react";
import style from "./Map.module.css";

function Map() {
  return (
    <div className={style.imgCont}>
      <img
        className={style.map}
        src={require("../../../img/map.png")}
        alt="Map of Manchester City Centre"
      />
    </div>
  );
}

export default Map;
