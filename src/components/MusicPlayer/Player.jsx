import React, { useEffect, useRef } from "react";
import { useGetSongQuery } from "../../redux/services/zingApi";



function Player({ isPlaying, reapeat, activeSong,volume,seekTime,onEnded,onTimeUpdate,onLoadedData }) {
      const { data } = useGetSongQuery(activeSong?.encodeId)
      const urlAudio = data?.data?.[128]  
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
        src={urlAudio}
        loop={reapeat}
        ref={ref}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
        onLoadedData = {onLoadedData}
     />
    
  );
}

export default Player;
