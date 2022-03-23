import React from "react";
import YouTube from "react-youtube";
import style from "./YoutubeEmbed.module.css";

function YouTubeEmbed({ videoId }) {
  const opts = {
    height: "250",
    width: "420",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <YouTube className={style.videoResponsive} videoId={videoId} opts={opts} />
  );
}

export default YouTubeEmbed;
