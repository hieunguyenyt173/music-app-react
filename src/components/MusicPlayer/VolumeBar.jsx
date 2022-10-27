import React from "react";

function VolumeBar({min, max,onChange, value, setVolume}) {
    
  return (
    <div className="hidden lg:flex flex-1 items-center justify-end">
        {value == 0 && <i className="ri-volume-mute-fill"></i>}
        {value > 0  && value <= 0.5 && <i className="ri-volume-down-fill"></i>}
        {value > 0.5 && value <= 1 && <i className="ri-volume-up-fill"></i>}


      <input
        className="2xl:w-40 lg:w-32 md:w-28 h-1 ml-2"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        type="range"
      />
    </div>
  );
}

export default VolumeBar;
