import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";
function SongCard({ song, isPlaying, activeSong, data, i}) {
  

  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false))
  };
  const handlePlayClick = () => {
     
      dispatch(setActiveSong({song, data, i}))
      dispatch(playPause(true))
      
  };
  
  return (
    <>
      <div className="song-card max-w-[240px group">
        <div className=" max-h-[240px] rounded-2xl overflow-hidden relative">
          <img
            className="group-hover:scale-110 transition-all group-hover:opacity-90"
            src={song.thumbnailM}
            alt="song-img"
          />
          <span className="like-icon hidden absolute top-4 left-4 hover:scale-125">
            <i className="ri-heart-fill text-slate-100 text-2xl opacity-60"></i>
          </span>
          <div
            className={`play-button  hover:scale-110 w-12 h-12 rounded-full overflow-hidden bg-slate-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ${isPlaying &&
              activeSong?.title === song?.title ? "block" : "hidden"
            }`}
          >
            <PlayPause 
            song={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Link
            to=""
            className="font-semibold text-sm mt-2 "
          >
            {song?.title}
          </Link>
          <Link
            to={
              song?.artists
                ? `/artists/${song?.artist?.alias}`
                : `/top-artists`
            }
            className="text-[13px] text-gray-500 hover:underline pb-3"
          >
            {song.artistsNames}
          </Link>
        </div>
      </div>
    </>
  );
}

export default SongCard;
