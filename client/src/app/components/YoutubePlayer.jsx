"use client";

import React from "react";
import YouTube from "react-youtube";

const Player = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleReady = (e) => {
    // access to player in all event handlers via event.target
    e.target.pauseVideo();
  };

  return (
      <div className="flex flex-col gap-20">
          <div className="text-4xl mx-auto mt-8 text-purple-700 font-bold">
              The Magic Behind Solar Panels
          </div>
          <div>
              <YouTube videoId="EG4KHwZut0o" opts={opts} onReady={handleReady} />
              </div>
    </div>
  );
};

export default Player;
