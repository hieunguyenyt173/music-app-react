import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveSong, playPause, likeList, setSongRecently, removeLike, addSongUser } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";
import { getTime } from "./MusicPlayer/Seekbar";
function SongItem({ activeSong, isPlaying, i, data, song }) {
  const listFavorites = JSON.parse(localStorage.getItem("listFavorite"))
  const dispatch = useDispatch();
  const songRecently = JSON.parse(localStorage.getItem("songRecently"))
  const {playlistUser} = useSelector((state) => state.player)
  const [isShow,setIsShow] = useState(false)

  const getTime = (time) => `${Math.floor(time / 60)}:${(`${Math.floor(time % 60)}`).slice(-2)}`;
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

  const handleAddToPlaylistUser = () => {
    setIsShow((prev) => !prev)
  }
  const handleAdd = (playlist, song) => {
    setIsShow(false)
    dispatch(addSongUser({playlist, song}))
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
                  ? `/nghe-sy/${artist?.id}`
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
      <div className="flex items-center relative">
      { !listFavorites || !listFavorites.find((item) => item.title === song.title) ? <i className="ri-heart-line  text-2xl cursor-pointer" onClick={handleLike}></i>
            :
            <i className="ri-heart-fill  text-2xl cursor-pointer text-red-600 block" onClick={handleRemoveLike}></i>
            }

        <p className="text-sm px-3">{song.duration ? getTime(song.duration) : ""}</p>
        <i className="ri-menu-add-line text-2xl cursor-pointer" onClick={handleAddToPlaylistUser}></i>
        {isShow && 
        <div className="absolute bg-[#f5f7fa] top-0 right-8 w-[120px] z-50 border-[0.5px]">
        <p className="text-center text-xs font-medium py-1 border-b text-red-500">Playlist</p>
        {playlistUser.length > 0 ?
         playlistUser.map((playlist,i) => (
          <div 
          key={i} className="text-xs px-3 py-2 hover:bg-sky-500 truncate cursor-pointer" 
          onClick={() => handleAdd(playlist, song)}
          >{playlist.title}
          
          </div>

          ))
          :
         <div> 
          <Link to="/playlist-user">
         <p className="text-xs p-3">Thêm playlist</p>
         </Link>
         </div>
      
        }
        </div>
        }
      </div>
    </div>
  );
}

export default SongItem;
