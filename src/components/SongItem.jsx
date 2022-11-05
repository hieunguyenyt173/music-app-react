import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveSong, playPause, likeList, setSongRecently, removeLike } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";
import { getTime } from "./MusicPlayer/Seekbar";
function SongItem({ activeSong, isPlaying, i, data, song }) {
  const listFavorites = JSON.parse(localStorage.getItem("listFavorite"))
  const dispatch = useDispatch();
  const songRecently = JSON.parse(localStorage.getItem("songRecently"))
  const handlePause = () => {
    dispatch(playPause(false));
    
  };
  const handlePlay = () => {
   
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
    if(songRecently === null) {
      dispatch(setSongRecently(song))
      
    }
    else  if(!songRecently.find((item) => item.title === song.title)) {
      dispatch(setSongRecently(song))
    }  
    else {
      return;
    }
  };

  const handleLike = () => {
    dispatch(likeList(song))
  }

  const handleRemoveLike = () => {
    if(listFavorites) {
      listFavorites.length > 0 && listFavorites.map((songFavor,index) => {
        if(songFavor.title === song.title) {
          dispatch(removeLike(index))
        }
      })
    }
    
  }
  return (
    <div className="song-item flex items-center justify-between hover:bg-[#f5f7fa] px-3 py-2 rounded-r-lg">
      <div className="flex items-center">
        <p>{i + 1}</p>
        <div className="w-14 h-14 rounded-lg overflow-hidden mx-4 relative">
          <img className="h-full w-full object-cover" src={song?.thumbnail} alt="" />
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
          <div className="">
          {song.artists.map((artist,i) => (
              <Link
              to={
                song?.artists
                  ? `/nghe-sy/${artist?.artistId}`
                  : `/top-artists`
              }
              className="text-[13px] text-gray-500 hover:underline pb-3 pr-1"
              key={i}
              >
              {artist.name}
              {song.artists.length > 1 && i === 0 ? "," : ""}
            </Link>
            
          ))}
          </div>
        </div>
      </div>
      <div className="flex items-center">
      { !listFavorites || !listFavorites.find((item) => item.title === song.title) ? <i className="ri-heart-line  text-2xl" onClick={handleLike}></i>
            :
            <i className="ri-heart-fill  text-2xl  text-red-600 block" onClick={handleRemoveLike}></i>
            }

        <p className="text-sm px-3">{song.duration ? song.duration : ""}</p>
        <i className="ri-more-fill text-2xl"></i>
      </div>
    </div>
  );
}

export default SongItem;
