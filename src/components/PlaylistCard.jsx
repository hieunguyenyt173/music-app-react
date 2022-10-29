import React from "react";
import { Link } from "react-router-dom";

function PlaylistCard({item}) {
  return (
    <Link to="/">
      <div className="playlist-card group">
      <div className="w-full rounded-xl overflow-hidden relative">
        <img
          className="group-hover:scale-110 transition-all"
          src={item?.banner}
          alt=""
        />
      </div>
    </div>
    </Link>
  );
}

export default PlaylistCard;
