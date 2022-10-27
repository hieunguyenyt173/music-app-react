import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  nextSong,
  prevSong,
  playPause,
} from "../../redux/features/playerSlice";
import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import VolumeBar from "./VolumeBar";

const MusicPlayer = () => {
  const { isPlaying, isActive, activeSong,currentSongs } = useSelector(
    (state) => state.player
  );

  const dispatch= useDispatch();
  const [volume, setVolume] = useState(0.6);
  const [reapeat, setReapeat] = useState(false);




  const handlePlayClick = () => {
      if(!isActive) return
      if(isPlaying) {
        dispatch(playPause(false))
      }
      else {
        dispatch(playPause(true))
      }
   }
  const handlePlayPause = () => {
    dispatch(playPause(false))
  }
  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={activeSong}
      />
      <div className="flex-1 flex flex-col items-center justify-center">
      <Player 
          isPlaying={isPlaying}
          isActive={isActive}
          activeSong={activeSong}
          reapeat={reapeat}
        />
        <Controls 
        isPlaying={isPlaying}
        isActive={isActive}
        currentSongs={currentSongs}
        handlePlayClick={handlePlayClick}
        handlePlayPause={handlePlayPause}
        />
        
        <Seekbar />
        
      </div>
      <VolumeBar
        min={0}
        max={1}
        value={volume}
        setVolume={setVolume}
        onChange={(e) => setVolume(e.target.value)}
      />
    </div>
  );
};

export default MusicPlayer;
