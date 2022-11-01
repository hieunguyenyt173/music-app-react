import React, { useState } from "react";
import { TbMicrophone2 } from 'react-icons/tb'
import { useDispatch } from "react-redux";
import { showPlaylist, showLyric } from '../../redux/features/playerSlice'
function VolumeBar({min, max,onChange, value, setVolume}) {
    const [showlyric, setShowLyric] = useState(false)
    const [showlist, setShowlist] = useState(false)
    
    const dispatch = useDispatch()
    const handleShowPlaylist = () => {
      setShowlist((prev) => !prev)
      dispatch(showPlaylist(showlist))
      dispatch(showLyric(false))
    }

    const handleShowlyric = () => {
      setShowLyric((prev) => !prev)
      dispatch(showLyric(showlyric))
      dispatch(showPlaylist(false))
      
    }
  return (
    <div className="hidden lg:flex flex-1 items-center justify-end">
        <TbMicrophone2 className="text-lg mr-4" onClick={handleShowlyric}/>
        {value === 0 && <i className="ri-volume-mute-fill" onClick={(e) => setVolume(1)}></i>}
        {value > 0  && value <= 0.5 && <i className="ri-volume-down-fill" onClick={(e) => setVolume(0)}></i>}
        {value > 0.5 && value <= 1 && <i className="ri-volume-up-fill" onClick={(e) => setVolume(0)}></i>}
      <input
        className="2xl:w-24 lg:w-32 md:w-28 h-1 ml-2"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        type="range"
      />
      <i className="ri-play-list-fill fs-5 ml-7 text-xl cursor-pointer" onClick={handleShowPlaylist}></i>
    </div>
  );
}

export default VolumeBar;
