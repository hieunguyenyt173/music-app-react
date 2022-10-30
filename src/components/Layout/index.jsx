import React from "react";
import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

import { useSelector } from "react-redux";
import MusicPlayer from "../MusicPlayer";
import PlaylistModal from "../PlaylistModal";
function Layout() {
  const { activeSong,isShowPlaylist } = useSelector((state) => state.player);
  console.log(isShowPlaylist)
  return (
    <>
      <Sidebar />
      <div className="ml-[200px] relative">
        <SearchBar />
        <div className="-mt-16 relative z-30">
          <Outlet />
          
        </div>
        {activeSong?.title && (
            <div className=" w-full fixed h-24 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#196eed] backdrop-blur-lg rounded-t-xl z-[1000]">
              <MusicPlayer />
            </div>
          )}
        {isShowPlaylist && <PlaylistModal/>}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
