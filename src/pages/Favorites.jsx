import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PlayPause from '../components/PlayPause';
import { playPause, removeLike, setActiveSong } from '../redux/features/playerSlice';

export const SongItemFavorite = ({ activeSong, isPlaying, i, data, song }) => {
  const [like, setLike] = useState(true)
  const dispatch = useDispatch();
  
  const handlePause = () => {
    dispatch(playPause(false));
    
  };
  const handlePlay = () => {
   
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

   const handleRemoveLike = () => {
    setLike((prev) => !prev)
    dispatch(removeLike(i))
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
       <i class="ri-heart-fill text-2xl text-red-600"></i>
      <p className="text-sm px-3">{song.duration ? song.duration : ""}</p>
      <i className="ri-more-fill text-2xl"></i>
      <i className="ri-close-circle-line text-2xl text-red-600 ml-3 cursor-pointer" onClick={() => handleRemoveLike(i)}></i>
    </div>
  </div>
  )
}

function Favorites() {
  const NhacCuaTui = require("nhaccuatui-api-full");
  const {isPlaying, activeSong} = useSelector((state) => state.player)
  const listFavorites = JSON.parse(localStorage.getItem("listFavorite"))
  
  return (
    <div className='lg:container mx-auto px-12 mb-10'>
       <p className="heading text-[32px] font-bold text-sky-600 pb-3">
           Nhạc yêu thích
          </p>
          
          <div>
        {
        listFavorites ? 
        listFavorites.map((song, i) => (
          <SongItemFavorite 
          key={i}
          song={song}
          data={listFavorites}
          isPlaying={isPlaying}
          activeSong={activeSong}
          i ={i}
          />
        ))  
        :
        <p>Chưa có bài hát yêu thích</p> 
        }
          </div>
          
        
        <div className='mt-7'>
        <p className="heading text-[32px] font-bold text-sky-600 pb-3">
           Video yêu thích
          </p>
          <div>
            <p>Chưa có video yêu thích</p>
          </div>
        </div>
        <div className='mt-7'>
        <p className="heading text-[32px] font-bold text-sky-600 pb-3">
           Album yêu thích
          </p>
          <div>
            <p>Chưa có album yêu thích</p>
          </div>
        </div>
    </div>
  )
}

export default Favorites