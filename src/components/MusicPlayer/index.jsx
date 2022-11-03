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
  const { isPlaying, isActive, activeSong, currentSongs, currentIndex } =
    useSelector((state) => state.player);

  const dispatch = useDispatch();
  const [volume, setVolume] = useState(0.8);
  const [reapeat, setReapeat] = useState(false);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [shuffle ,setShuffle ] = useState(false)
  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex]);

  const handlePlayClick = () => {
    if (!isActive) return;
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };
  const handlePlayPause = () => {
    dispatch(playPause(false));
  };

  const handleNextSong = () => {
   
    dispatch(playPause(false));
    if(!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length))
    }
    else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)))
    }
    
  };
  const handlePrevSong = () => {
    if(!shuffle) {
      if(currentIndex > 0){
        dispatch(prevSong((currentIndex - 1)))
      }
      else {
        dispatch(prevSong(0))
      }
      
    }
    else {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)))
    }
  };
  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={activeSong}
      />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Player
          volume={volume}
          seekTime={seekTime}
          isPlaying={isPlaying}
          isActive={isActive}
          activeSong={activeSong}
          reapeat={reapeat}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
        <Controls
          shuffle ={shuffle}
          reapeat ={reapeat}
          setReapeat={setReapeat}
          setShuffle={setShuffle}
          handleNextSong={handleNextSong}
          handlePrevSong={handlePrevSong}
          isPlaying={isPlaying}
          isActive={isActive}
          currentSongs={currentSongs}
          handlePlayClick={handlePlayClick}
          handlePlayPause={handlePlayPause}
        />

        <Seekbar
          min="0"
          max={duration}
          value={appTime}
          onInput={(e) => setSeekTime(e.target.value)}
        />
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
