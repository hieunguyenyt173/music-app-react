import React, { useEffect, useRef, useState } from "react";




function Player({ isPlaying, reapeat, activeSong,volume,seekTime,onEnded,onTimeUpdate,onLoadedData }) {
  const [urlAudio ,setUrlAudio] = useState()
      const { getSong } = require("nhaccuatui-api-full");
      const ref = useRef(null);
       useEffect(() => {
        getSong(activeSong.key || activeSong.songKey).then((data) => setUrlAudio(data?.song?.streamUrls[0]?.streamUrl))
        
        
       },[activeSong.key || activeSong.songKey])
      
     
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


