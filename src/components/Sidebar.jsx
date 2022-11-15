import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {NavLink, Link} from 'react-router-dom'
import {logomusic} from '../assets/index'
function Sidebar() {
  const {user} = useSelector((state) => state.user)
 
  return (
    <>
     <div className="min-w-[200px] bg-[#f5f7fa] h-screen fixed top-0 left-0 z-1000">
        <div className="flex justify-between items-center px-4 pt-6 pb-12 max-w-[200px]">
          <Link to="/">
          <img
            src={logomusic}
            alt="logo"
          />
          </Link>
          <div className="menubar ml-2">
            <i className="ri-menu-3-line text-2xl"></i>
          </div>
        </div>
        <div className="flex flex-col text-sm font-medium w-full">
          <NavLink to="/" end>
          <div className="nav-item w-full flex items-center py-[10px] px-6">
            <i className="ri-home-5-line text-xl pr-3"></i>
            <p>Khám phá</p>
          </div>
          </NavLink>
          <NavLink to="nhac-moi">
          <div className="nav-item w-full flex items-center py-[10px] px-6">
            <i className="ri-disc-line text-xl pr-3"></i>
            <p>Nhạc mới</p>
          </div>
          </NavLink>
          <NavLink to="the-loai">
          <div className="nav-item w-full flex items-center py-[10px] px-6">
            <i className="ri-album-line text-xl pr-3"></i>
            <p>Thể loại</p>
          </div>
          </NavLink>
          <NavLink to="top-albums">
          <div className="nav-item w-full flex items-center py-[10px] px-6">
            <i className="ri-mic-line text-xl pr-3"></i>
            <p>Top Albums</p>
          </div>
            
          </NavLink>
          <NavLink to="mv">
            <div className="nav-item w-full flex items-center py-[10px] px-6">
              <i className="ri-movie-line text-xl pr-3"></i>
              <p>MV</p>
            </div>
            </NavLink>
        </div>
        {user.id === 1997 && 
        <div>
           <p className="text-sm text-slate-400 px-6 py-[10px]">Admin</p>
           <div className="flex flex-col text-sm font-medium">
           <NavLink to="/admin/danh-sach-user">
            <div className="nav-item w-full flex items-center py-[10px] px-6">
              <i className="ri-list-settings-line text-xl pr-3"></i>
              <p>Danh sách user</p>
            </div>
            </NavLink>
            <NavLink to="/admin/them-user">
            <div className="nav-item w-full flex items-center py-[10px] px-6">
              <i className="ri-user-add-line text-xl pr-3"></i>
              <p>Tạo user</p>
            </div>
            </NavLink >
           </div>
           
        </div>
        }
        {
          user.id &&
          <div>
          <p className="text-sm text-slate-400 px-6 py-[10px]">Cá nhân</p>
          <div className="flex flex-col text-sm font-medium">
            <NavLink to="favorites">
            <div className="nav-item w-full flex items-center py-[10px] px-6">
              <i className="ri-heart-line text-xl pr-3"></i>
              <p>Yêu thích</p>
            </div>
            </NavLink>
            <NavLink to="playlist-user">
            <div className="nav-item w-full flex items-center py-[10px] px-6">
              <i className="ri-play-list-line text-xl pr-3"></i>
              <p>Playlist</p>
            </div>
            </NavLink >
            <NavLink to="history">
            <div className="nav-item w-full flex items-center py-[10px] px-6">
              <i className="ri-history-line text-xl pr-3"></i>
              <p>Gần đây</p>
            </div>
            </NavLink>
          </div>
        </div>
        }
      </div>
    </>
  )
}

export default Sidebar