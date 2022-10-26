import React from "react";

function PlaylistCard() {
  return (
    <div className="playlist-card group">
      <div className="max-w-[306px] rounded-xl overflow-hidden relative">
        <img
          className="group-hover:scale-110 transition-all"
          src="https://www.kri8thm.in/html/listen/theme/demo/images/background/horizontal/3.jpg"
          alt=""
        />
        <div className="p-4 absolute bottom-0 left-0 text-white">
          <p className="font-semibold">Solo Special</p>
          <p className="text-sm">21 songs | 10 favorites</p>
        </div>
      </div>
    </div>
  );
}

export default PlaylistCard;
