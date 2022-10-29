import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";
import { getTime } from "./MusicPlayer/Seekbar";
function SongItem({ activeSong, isPlaying, i, data, song }) {

  const dispatch = useDispatch();
  
  const handlePause = () => {
    dispatch(playPause(false));
    
  };
  const handlePlay = () => {
   
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div className="song-item flex items-center justify-between hover:bg-[#f5f7fa] px-3 py-2 rounded-r-lg">
      <div className="flex items-center">
        <p>{i + 1}</p>
        <div className="w-14 h-14 rounded-lg overflow-hidden mx-4 relative">
          <img src={song?.thumbnailM} alt="" />
          <div
            className={`play-button  hover:scale-110 w-8 h-8 rounded-full overflow-hidden bg-slate-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ${isPlaying &&
              activeSong?.title === song?.title ? "block" : "hidden"
            }`}
          >
            <PlayPause 
            song={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
            handlePause={handlePause}
            handlePlay={handlePlay}
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
              (song?.artists.lenth === 1)
              ? `/artists/${song?.artists?.alias}`
              : `/artists/${song?.artists[0]?.alias}`

            }
            className="text-[13px] text-gray-500 hover:underline pb-3"
          >
            {song.artistsNames}
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <i className="ri-heart-line heart-empty text-2xl"></i>

        <p className="text-sm px-3">{getTime(song.duration)}</p>
        <i className="ri-more-fill text-2xl"></i>
      </div>
    </div>
  );
}

export default SongItem;
