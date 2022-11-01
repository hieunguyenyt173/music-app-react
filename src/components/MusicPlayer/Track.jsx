import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.thumbnail} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-sm font-semibold">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate text-xs">
        {activeSong.artists.map((artist, i) => (
            `${artist.name}
            ${activeSong.artists.length > 1 && i === 0 ? "," : ""}`
        ))}
      </p>
    </div>
  </div>
);

export default Track;