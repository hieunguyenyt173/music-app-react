import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getTime } from '../../components/MusicPlayer/Seekbar';
import PlayPause from '../../components/PlayPause';
import { removeSongLike } from '../../redux/features/authSlice';


import { playPause, removeLike, setActiveSong } from '../../redux/features/playerSlice';
import { useGetUserQuery, useUpdateUserMutation } from '../../redux/services/userApi';
import { TopAlbumItem } from '../TopAlbums';
import { VideoItem } from '../TopMV';



export const SongItemFavorite = ({ activeSong, isPlaying, i, data, song }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user)
  const [updateUser] = useUpdateUserMutation()
 
  const listFavorites = user.songFavorites
  const handlePause = () => {
    dispatch(playPause(false));
    
  };
  const handlePlay = () => {
   
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

   const handleRemoveLike = () => {
    const newUpdate = {...user, songFavorites : [...user.songFavorites].filter((s) => s.title !== song.title)}
      listFavorites.map((songFavor, index) => {
        if(songFavor.title === song.title) {
         dispatch(removeSongLike(index))
         updateUser(newUpdate)
        }
      })
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
       <i className="ri-heart-fill text-2xl text-red-600"></i>
      <p className="text-sm px-3">{song.duration ? getTime(song.duration) : ""}</p>
      <i className="ri-more-fill text-2xl"></i>
      <i className="ri-close-circle-line text-2xl text-red-600 ml-3 cursor-pointer" onClick={() => handleRemoveLike(i)}></i>
    </div>
  </div>
  )
}

function Favorites() {
  const {isPlaying, activeSong} = useSelector((state) => state.player)
  const {userId} = useParams();
  const { user } = useSelector((state) => state.user)
  
  
  
  const listFavorites = user?.songFavorites
  const listPlaylistLike = user?.playlist
  const listVideoLike = user?.videoFavorites
  return (
    <div className='lg:container mx-auto px-12 mb-10'>
       <p className="heading text-[32px] font-bold text-sky-600 pb-3">
           Nhạc yêu thích
          </p>
          
          <div>
        {
        !listFavorites || listFavorites.length === 0 ? 
        <p>Chưa có bài hát yêu thích</p> 
        :
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
        

        }
          </div>
          
        
        <div className='mt-7'>
        <p className="heading text-[32px] font-bold text-sky-600 pb-3">
           Video yêu thích
          </p>
          <div className="grid grid-cols-3 gap-5">
              {
              !listVideoLike || listVideoLike.length === 0 ? 
              <p>Chưa có album yêu thích</p> 
              :
            
              listVideoLike.map((video, i) => (
                  <VideoItem key={i} i={i} video={video} />
                ))}
            </div>
        </div>
        <div className='mt-7'>
        <p className="heading text-[32px] font-bold text-sky-600 pb-3">
           Album yêu thích
          </p>
          <div className="flex">
          <div className="">
            <div className="grid grid-cols-5 gap-5">
              {
              !listPlaylistLike || listPlaylistLike.length === 0 ? 
              <p>Chưa có album yêu thích</p> 
              :
            
              listPlaylistLike.map((playlist, i) => (
                  <TopAlbumItem key={i} i={i} playlist={playlist} />
                ))}
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Favorites