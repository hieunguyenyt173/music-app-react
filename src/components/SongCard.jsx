import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setActiveSong, playPause, likeList, setLikeIcon, setRecentlyList, removeLike } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";
function SongCard({ song, isPlaying, activeSong, data, i}) {
  const { listFavorites,recentlyList} = useSelector((state) => state.player)
  const [like,setLike] = useState(false)
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false))
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}))
    dispatch(playPause(true))
    if(recentlyList.find((item) => item === song)) {
      return;
    }
    else{
      dispatch(setRecentlyList(song))
    }
       
      
  };
  const handleLike = () => {
    setLike((prev) => !prev)
      if(like) {
        dispatch(likeList({song}))
      }
      // if(!like) {
      // dispatch(removeLike(i))
      // }
    
    
  }
  console.log(listFavorites.songFavorites)
  console.log(like)
  return (
    <>
      <div className="song-card max-w-[240px group">
        <div className=" max-h-[240px] rounded-2xl overflow-hidden relative">
          <img
            className="group-hover:scale-110 transition-all group-hover:opacity-90"
            src={song.thumbnail}
            alt="song-img"
          />
          <span className="like-icon absolute top-4 left-4 hover:scale-125 hover:text-red-600">
            
            <i className={`ri-heart-fill  text-2xl  ${!like && !listFavorites.songFavorites.find((item) => item.title === song.title) ? "text-slate-100 opacity-75" : "text-red-600 block"}`} onClick={handleLike}></i>
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
          <div className="">
          {song.artists.map((artist,i) => (
              <Link
              to={
                song?.artists
                  ? `/nghe-sy/${artist?.artistId}`
                  : `/nghe-sy`
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
    </>
  );
}

export default SongCard;
