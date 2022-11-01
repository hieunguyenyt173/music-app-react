import React from "react";
import { Link } from "react-router-dom";

function PlaylistCard({playlist}) {
  return (
    <Link to={`/top100/${playlist?.key}`}>
      <div className="playlist-card group">
      <div className="w-full rounded-xl overflow-hidden relative">
        <img
          className="group-hover:scale-110 transition-all"
          src={playlist?.thumbnail}
          alt=""
        />
      </div>
    </div>
    </Link>
  );
}

export default PlaylistCard;
