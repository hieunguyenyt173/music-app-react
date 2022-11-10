import React, { useEffect, useRef, useState } from "react";
import { useGetSongQuery } from "../../redux/services/zingApi";




function Player({ isPlaying, reapeat, activeSong,volume,seekTime,onEnded,onTimeUpdate,onLoadedData }) {
  const { data } = useGetSongQuery(activeSong?.encodeId)
      const ref= useRef(null)
       if (ref.current) {
         
        if(isPlaying) {
          const playPromise = ref.current.play();
          // ref.current.play();
          if (playPromise !== undefined) {
            playPromise.then(_ => {
              // Automatic playback started!
              // Show playing UI.
            })
            .catch(error => {
              // Auto-play was prevented
              // Show paused UI.
            });
          }
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
        src={data?.data?.[128]}
        loop={reapeat}
        ref={ref}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
        onLoadedData = {onLoadedData}
     />
    
  );
}

export default Player;


