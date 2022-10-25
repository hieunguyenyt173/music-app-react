import React from "react";

function ArtistCard() {
  return (
    <a href="#">
        <div className="artist-card transition-all">
      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
        <img
          src="https://www.kri8thm.in/html/listen/theme/demo/images/cover/large/6.jpg"
          alt=""
        />
      </div>
      <div className="text-center">
      <p className="text-sm font-medium mt-3">Gerrina Linda</p>
      </div>
    </div>
    </a>
  );
}

export default ArtistCard;
