import React, { useEffect, useRef, useState } from "react";




function Player({ isPlaying, reapeat, activeSong,volume,seekTime,onEnded,onTimeUpdate,onLoadedData }) {
  const [urlAudio ,setUrlAudio] = useState()
      const { getSong } = require("nhaccuatui-api-full");
     
       useEffect(() => {
        getSong(activeSong.key || activeSong.songKey).then((data) => setUrlAudio(data?.song?.streamUrls[0]?.streamUrl))
        
       },[activeSong.key || activeSong.songKey])
      
     
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


