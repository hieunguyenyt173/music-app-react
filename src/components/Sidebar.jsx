import React from 'react'
import {Link} from 'react-router-dom'
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
          <div className="nav-item w-full flex items-center py-[10px] px-6">
            <i className="ri-home-5-line text-xl pr-3"></i>
            <Link to="/">Discover</Link>
          </div>
          <div className="nav-item w-full flex items-center py-[10px] px-6">
            <i className="ri-disc-line text-xl pr-3"></i>
            <Link to="around-you">Around You</Link>
          </div>
          <div className="nav-item w-full flex items-center py-[10px] px-6">
            <i className="ri-album-line text-xl pr-3"></i>
            <Link to="top-charts">Top Charts</Link>
          </div>
          <div className="nav-item w-full flex items-center py-[10px] px-6">
            <i className="ri-mic-line text-xl pr-3"></i>
            <Link to="top-artists">Top artists</Link>
          </div>
        </div>
        <div>
          <p className="text-sm text-slate-400 px-6 py-[10px]">Thư viện</p>
          <div className="flex flex-col text-sm font-medium">
            <div className="nav-item w-full flex items-center py-[10px] px-6">
              <i className="ri-heart-line text-xl pr-3"></i>
              <Link to="favorites">Favorites</Link>
            </div>
            <div className="nav-item w-full flex items-center py-[10px] px-6">
              <i className="ri-play-list-line text-xl pr-3"></i>
              <Link to="playlist">Playlist</Link>
            </div>
            <div className="nav-item w-full flex items-center py-[10px] px-6">
              <i className="ri-history-line text-xl pr-3"></i>
              <Link to="history">History</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar