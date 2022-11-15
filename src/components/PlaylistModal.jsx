import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
 export const ItemPlaylist = ({ activeSong, isPlaying, i, data, song }) => {
  const dispatch = useDispatch();
  
  const handlePause = () => {
    dispatch(playPause(false));
    
  };
  const handlePlay = () => {
   
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div className={`song-item flex items-center justify-between hover:bg-[#f5f7fa] px-3 py-2 rounded-lg ${activeSong.title === song.title ? "bg-[#f5f7fa]" : ""}`}>
      <div className="flex items-center">
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
          {song.artists && song.artists.map((artist,i) => (
              <Link
              to={
                song?.artists
                  ? `/artists/${song?.artist?.shortLink}`
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
      
    </div>
  )
}
function PlaylistModal() {
  const { isPlaying, activeSong, currentSongs, isShowPlaylist } = useSelector(
    (state) => state.player
  );

  return (
    <div className={`fixed top-0  bottom-20 z-50 bg-gradient-to-br bg-[#97b8eb] backdrop-blur-lg w-80 overflow-hidden duration-300
      ${isShowPlaylist ? "right-0" : "-right-80"}
    `}>
      <div className="border-b border-gray-400 flex justify-between items-center">
        <p className="uppercase p-3 text-sm font-semibold">
          Danh sách phát
        </p>
      </div>
      <div className="p-5 ">
        <div className="mx-auto">
        <div className="">
        <img className="mx-auto" src={activeSong.thumbnailM} alt="" />
        </div>
        <p className="font-semibold text-sm mt-2">{activeSong?.title}</p>
        <div className="flex">
          {[] || activeSong?.artists.map((artist,i) => (
              <p
              className="text-[13px] text-gray-500 hover:underline pb-3 pr-1"
              key={i}
              >
              {artist?.name}
              {activeSong.artists.length > 1 && i === 0 ? "," : ""}
              </p>
            
          ))}
          </div>
        </div>
      </div>
      <div className="rounded-xl uppercase text-[13px] font-semibold text-center">
      Playlist
      </div>
      <div className="p-3 ">
        <div className="overflow-y-auto h-[500px]">
          {currentSongs && currentSongs.map((song, i) => (
            <ItemPlaylist
                key={i}
                activeSong ={activeSong}
                isPlaying ={isPlaying}
                i = {i}
                data ={currentSongs}
                song = {song}

            />

          ))}
        </div>
      </div>
    </div>
  );
}

  

export default PlaylistModal;
