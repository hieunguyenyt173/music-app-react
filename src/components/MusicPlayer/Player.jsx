import React, { useRef } from "react";

function Player({ isPlaying, reapeat, activeSong }) {
  const ref = useRef(null);
  
        if (ref.current) {
          if(isPlaying) {
            ref.current.play();
          }
          else {
            ref.current.pause()
          }
         
        }

  return (
    <>
      <audio
        src={activeSong?.hub?.actions[1]?.uri}
        loop={reapeat}
        ref={ref}
      ></audio>
    </>
  );
}

export default Player;
