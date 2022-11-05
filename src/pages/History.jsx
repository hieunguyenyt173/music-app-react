import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PlayPause from '../components/PlayPause';
import { playPause, removeHistory, removeSongRecently, setActiveSong } from '../redux/features/playerSlice';
import { TopAlbumItem } from './TopAlbums';
import { VideoItem } from './TopMV';


export const SongItemRecently = ({ activeSong, isPlaying, i, data, song }) => {
  const dispatch = useDispatch();
  const  songRecently = JSON.parse(localStorage.getItem("songRecently"))
  const handlePause = () => {
    dispatch(playPause(false));
    
  };
  const handlePlay = () => {
   
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

   const handleRemove = (i) => {
    if(songRecently) {
      songRecently.length > 0 && songRecently.map((songFavor,index) => {
        if(songFavor.title === song.title) {
          dispatch(removeSongRecently(index))
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

      <p className="text-sm px-3">{song.duration ? song.duration : ""}</p>
      <i className="ri-more-fill text-2xl"></i>
      <i className="ri-close-circle-line text-red-600 text-2xl ml-3 cursor-pointer" onClick={() => handleRemove(i)}></i>
    </div>
  </div>
  )
}

function History() {

  const {isPlaying, activeSong} = useSelector((state) => state.player)
  const  songRecently = JSON.parse(localStorage.getItem("songRecently"))
  const  videoRecently = JSON.parse(localStorage.getItem("videoRecently"))
  const  playlistRecently = JSON.parse(localStorage.getItem("playlistRecently"))
  return (
    <div className='lg:container mx-auto px-12 mb-10'>
       <p className="heading text-[32px] font-bold text-sky-600 pb-3">
           Bài hát gần đây
          </p>
          
          <div>
        {
        songRecently ? 
        songRecently.map((song, i) => (
          <SongItemRecently
          key={i}
          song={song}
          data={songRecently}
          isPlaying={isPlaying}
          activeSong={activeSong}
          i ={i}
          />
        ))  
        :
        <p>Chưa có bài hát nào</p> 
        }
          </div>
          
        
        <div className='mt-7'>
        <p className="heading text-[32px] font-bold text-sky-600 pb-3">
           Video gần đây
          </p>
          <div className="grid grid-cols-3 gap-5">
              {
              !videoRecently || videoRecently.length === 0 ? 
              <p>Chưa có album yêu thích</p> 
              :
            
              videoRecently.map((video, i) => (
                  <VideoItem key={i} i={i} video={video} />
                ))}
            </div>
        </div>
        <div className='mt-7'>
        <p className="heading text-[32px] font-bold text-sky-600 pb-3">
           Album gần đây
          </p>
          <div className="grid grid-cols-5 gap-5">
              {
              !playlistRecently || playlistRecently.length === 0 ? 
              <p>Chưa có album yêu thích</p> 
              :
            
              playlistRecently.map((playlist, i) => (
                  <TopAlbumItem key={i} i={i} playlist={playlist} />
                ))}
            </div>
        </div>
    </div>
  )
  
}

export default History