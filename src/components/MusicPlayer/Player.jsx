import React, { useEffect, useRef } from "react";

function Player({ isPlaying, reapeat, activeSong,volume,seekTime,onEnded,onTimeUpdate,onLoadedData }) {
  const ref = useRef(null);
    
        if (ref.current) {
         
          if(isPlaying) {
            ref.current.play();
          }
          else {
            ref.current.pause();
            
          }
         
        }
       
  useEffect(() => {
    ref.current.volume = volume;
  },
  [volume])

  useEffect(() => {
    ref.current.currentTime = seekTime;
  }
  ,[seekTime])
  return (
    
      <audio
        src={activeSong?.hub?.actions[1]?.uri}
        loop={reapeat}
        ref={ref}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
        onLoadedData = {onLoadedData}
     />
    
  );
}

export default Player;
