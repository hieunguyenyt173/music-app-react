import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPlaylistUser, removeUserPlaylist } from '../../redux/features/authSlice';

import { useUpdateUserMutation } from '../../redux/services/userApi';


export const  PlaylistUserItem = ({playlist,i}) => {
  const { user } = useSelector((state) => state.user)
  const [updateUser] = useUpdateUserMutation()
  const  playlistUser = user?.playlistUser
    const dispatch = useDispatch()
 const handleRemoveUserPlaylist = () => {
       
        const newUpdate = {...user, playlistUser : [...user.playlistUser].filter((s) => s.title !== playlist.title)}
      playlistUser.map((songFavor, index) => {
        if(songFavor.title === playlist.title) {
         dispatch(removeUserPlaylist(index))
         updateUser(newUpdate)
        }
      })
   }
  
  return (
    <div className="playlist-card group">
        <div className="w-full rounded-xl overflow-hidden relative">
        <Link to={`/playlist-user/${playlist?.key}`}>
          <img
            className="group-hover:scale-110 transition-all"
            src={playlist?.songs.length > 0 ? playlist?.songs[0].thumbnailM : playlist?.thumbnailB}
            alt=""
          />
          <div className="hidden w-12 h-12 rounded-full overflow-hidden bg-slate-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] group-hover:block hover:scale-125 duration-150">
            <i className="ri-play-fill icon-play text-2xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></i>
          </div>
    </Link>
          <span className='like-icon absolute top-4 left-4 hover:scale-125 hover:text-red-600'>
          <i className=" ri-delete-bin-line text-2xl px-2 cursor-pointer" onClick={handleRemoveUserPlaylist}></i>
          </span>
        </div>
        <p className="font-semibold text-sm mt-2">{playlist.title}</p>
      </div>
  );
}
function PlaylistUser() {
    const [isShowModal, setIsShowModal] = useState(false)
    const [value,setValue] = useState("")
    
    const { user } = useSelector((state) => state.user)
  const [updateUser] = useUpdateUserMutation()
  const  playlistUser = user?.playlistUser
    const dispatch = useDispatch()
    const handleShowPlaylist = () => {
        setIsShowModal(true)
    }
   const handleAddPlaylist = () => {
    const newPlaylist = {
      title: value,
      thumbnailB:"https://photo-zmp3.zmdcdn.me/album_default.png",
      songs: [],
      key: Math.floor(Math.random() * 10000)
    }
    dispatch(addPlaylistUser(newPlaylist))
    setIsShowModal(false)
    setValue("")
    const newUpdate = {...user, playlistUser : [...user.playlistUser, newPlaylist]}
    updateUser(newUpdate)
   }
   
  
  return (
    <div className='lg:container mx-auto px-12 mb-10 min-h-[650px] relative'>
       {isShowModal &&  <div className='w-96 h-44 bg-[#97b8eb] p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg z-50'>
            <div className='flex justify-between items-center pb-3'>
            <p className='text-center'>Tạo playlist mới</p>
            <i className="ri-close-line flex justify-end text-2xl" onClick={(e) => setIsShowModal(false)}></i>
            </div>
            <input type="text" 
            value={value}
            onChange={e => setValue(e.target.value)}
            className='w-full px-3 py-2 rounded-lg bg-transparent placeholder:text-slate-500 border border-[0.5px] contrast-more:border-slate-400 focus:outline-none'
            placeholder='Nhập tên playlist'/>
           <div className='w-full'>
           <button className='px-4 py-2 bg-sky-600 text-slate-200 rounded-lg mt-5 block mx-auto hover:bg-sky-700' onClick={handleAddPlaylist}>
                Tạo mới
            </button>
           </div>
        </div>}
        <p className="heading text-[32px] font-bold text-sky-600 pb-3">
           Playlist
          </p>
          <div className='grid grid-cols-5 gap-5'>
                {playlistUser.length > 0 && playlistUser.map((playlist, i) => (
                  <PlaylistUserItem 
                  key={i}
                  playlist={playlist}
                  i={i}
                  />
                ))}
                
                <div className='border border-gray-700 min-h-[250px] flex justify-center items-center hover:text-sky-600' onClick={handleShowPlaylist}>
                <div>
                <p className="text-center py-3">Tạo playlist mới</p>  
                <div className="flex justify-center">
                <i className="ri-add-circle-line text-5xl"></i>
                </div>
                </div>
                </div>
          </div>
         
    </div>
  )
}

export default PlaylistUser