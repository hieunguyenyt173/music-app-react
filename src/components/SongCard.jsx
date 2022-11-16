import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setActiveSong, playPause, setSongRecently } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";
import { useGetUserQuery, useUpdateUserMutation } from "../redux/services/userApi";
function SongCard({ song, isPlaying, activeSong, data, i}) {
  const songRecently = JSON.parse(localStorage.getItem("songRecently"))
  const { data :dataUser } = useGetUserQuery()
  const { user, listUser } = useSelector((state) => state.user)
  const [updateUser] = useUpdateUserMutation()
  const userLike = dataUser?.find((e) => e.id === user.id)
  const listFavorites = userLike?.songFavorites
  
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false))
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}))
    dispatch(playPause(true))
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
  const handleLike = (song) => {
    const newUpdate = {...userLike, songFavorites: [...userLike.songFavorites, song]}
    updateUser(newUpdate)
    console.log(userLike)
  }
  const handleRemoveLike = () => {
    if(listFavorites.length > 0) {
      listFavorites.map((songFavor, index) => {
        if(songFavor.title === song.title) {
          const newUpdateRemove = {...userLike}
          console.log(newUpdateRemove)
        }
      })
    }
    // if(listFavorites) {
    //   listFavorites.length > 0 && listFavorites.map((songFavor,index) => {
    //     if(songFavor.title === song.title) {
    //       const newUpdate = {...userLike, songFavorites: [...userLike.songFavorites].splice(index,1)}
    //       console.log(newUpdate)
    //     }
    //   })
    // }
    
  }
  return (
    <>
      <div className="song-card max-w-[240px group">
        <div className=" max-h-[240px] rounded-2xl overflow-hidden relative">
          <img
            className="group-hover:scale-110 transition-all group-hover:opacity-90"
            src={song.thumbnailM
            }
            alt="song-img"
          />
          <span className="like-icon absolute top-4 left-4 hover:scale-125 hover:text-red-600">
            { !listFavorites || !listFavorites.find((item) => item.title === song.title) ? <i className="ri-heart-fill  text-2xl   text-slate-100 opacity-75" onClick={(e) => handleLike(song)}></i>
            :
            <i className="ri-heart-fill  text-2xl  text-red-600 block" onClick={(e) => handleRemoveLike(song)}></i>
            }
            
            
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
                  ? `/nghe-sy/${artist?.alias}`
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
