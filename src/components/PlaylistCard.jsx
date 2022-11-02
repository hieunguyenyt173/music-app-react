import React from "react";
import { Link } from "react-router-dom";

function PlaylistCard({playlist}) {
  return (
    <Link to={`/playlists/${playlist?.key}`}>
      <div className="playlist-card group">
      <div className="w-full rounded-xl overflow-hidden relative">
        <img
          className="group-hover:scale-110 transition-all"
          src={playlist?.thumbnail}
          alt=""
        />
        <div className="hidden w-12 h-12 rounded-full overflow-hidden bg-slate-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] group-hover:block hover:scale-125 duration-150">
            <i className="ri-play-fill icon-play text-2xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></i>
          </div>
      </div>
    </div>
    </Link>
  );
}

export default PlaylistCard;
