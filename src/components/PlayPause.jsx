import React from "react";

function PlayPause({ isPlaying, activeSong, song, handlePlay, handlePause }) {

  return (
    <>
      {(isPlaying && activeSong?.title === song?.title) ? (
        <i
          className="ri-pause-fill icon-pause text-2xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
          onClick={handlePause}
        ></i>
      ) : (
        <i
          className="ri-play-fill icon-play text-2xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
          onClick={handlePlay}
        ></i>
      )}
    </>
  );
}

export default PlayPause;
