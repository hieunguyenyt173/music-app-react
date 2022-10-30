import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SongItem from "./SongItem";
import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

function PlaylistModal() {
  const { isPlaying, activeSong, data, isActive } = useSelector(
    (state) => state.player
  );
  const dispatch = useDispatch();

  
  return (
    <div className="fixed top-0 right-0 z-50 bg-gradient-to-br bg-[#f5f7fa] w-80 h-screen">
      <div className="border-b border-sky-400 flex justify-between items-center">
        <p className="uppercase p-3 text-sm font-medium text-sky-500">
          Danh sách phát
        </p>
      </div>
      <div className="p-3">
        <p className="uppercase text-[13px] text-sky-500">Đang phát</p>
      </div>
      <div className="p-3 uppercase text-[13px] text-sky-500">
        <p>Tiếp theo</p>
        
      </div>
    </div>
  );
}

  

export default PlaylistModal;
