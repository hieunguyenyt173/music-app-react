import React from 'react'
import {NavLink, Link} from 'react-router-dom'
function Sidebar() {
  return (
    <>
     <div className="min-w-[280px] bg-[#f5f7fa] h-screen fixed top-0 left-0 z-1000">
        <div className="flex justify-between items-center px-4 pt-6 pb-12">
          <Link to="/">
          <img
            src="https://www.kri8thm.in/html/listen/theme/demo/images/logos/logo.svg"
            alt="logo"
          />
          </Link>
          <div className="menubar">
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
          <NavLink to="top-charts">
          <div className="nav-item w-full flex items-center py-[10px] px-6">
            <i className="ri-album-line text-xl pr-3"></i>
            <p>Thể loại</p>
          </div>
          </NavLink>
          <NavLink to="top-artists">
          <div className="nav-item w-full flex items-center py-[10px] px-6">
            <i className="ri-mic-line text-xl pr-3"></i>
            <p>Top 100</p>
          </div>
            <NavLink to="mv">
            <div className="nav-item w-full flex items-center py-[10px] px-6">
              <i className="ri-history-line text-xl pr-3"></i>
              <p>MV</p>
            </div>
            </NavLink>
          </NavLink>
        </div>
        <div>
          <p className="text-sm text-slate-400 px-6 py-[10px]">Cá nhân</p>
          <div className="flex flex-col text-sm font-medium">
            <NavLink to="favorites">
            <div className="nav-item w-full flex items-center py-[10px] px-6">
              <i className="ri-heart-line text-xl pr-3"></i>
              <p>Yêu thích</p>
            </div>
            </NavLink>
            <NavLink to="playlist">
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
      </div>
    </>
  )
}

export default Sidebar