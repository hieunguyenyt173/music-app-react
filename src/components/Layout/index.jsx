import React from "react";
import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

import { useSelector } from "react-redux";
import MusicPlayer from "../MusicPlayer";
import PlaylistModal from "../PlaylistModal";
import LyricModal from "../LyricModal";
function Layout() {
  const { activeSong } = useSelector((state) => state.player);
 
  return (
    <>
      <Sidebar />
      <div className="ml-[200px] relative main">
        <SearchBar />
        <div className="-mt-20 relative z-30">
          <Outlet />
          
        </div>
        {activeSong?.title && (
            <div className=" w-full fixed h-20 bottom-0 left-0 right-0 flex animate-slideup bg-[#97b8eb] backdrop-blur-lg  z-[1000] border border-[0.5px] border-[#649ef5]">
              <MusicPlayer />
            </div>
          )}
        <PlaylistModal/>
        <LyricModal/>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
