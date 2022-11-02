import React from "react";
import { Link } from "react-router-dom";

function ArtistCard({artist}) {
 
  return (
    <div className="artist-card group">
    <Link to={`/nghe-sy/${artist.shortLink}`}>
        
      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
        <img
        className="group-hover:scale-110 transition-all"
          src={artist.imageUrl}
          alt=""
        />
      </div>
      <div className="text-center">
      <p className="text-sm font-medium mt-3">{artist.name}</p>
      </div>
      
    </Link>
    </div>
  );
}

export default ArtistCard;
