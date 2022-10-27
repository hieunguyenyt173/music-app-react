import React from "react";
import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

import { useSelector } from "react-redux";
import MusicPlayer from "../MusicPlayer";
function Layout() {
  const { activeSong } = useSelector((state) => state.player);
  return (
    <>
      <Sidebar />
      <div className="ml-[280px]">
        <SearchBar />
        <div className="-mt-16 relative z-30">
          <Outlet />
          
        </div>
        {activeSong?.title && (
            <div className=" w-full fixed h-24 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#196eed] backdrop-blur-lg rounded-t-xl z-50">
              <MusicPlayer />
            </div>
          )}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
