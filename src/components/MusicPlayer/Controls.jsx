import React from 'react'

function Controls({isActive, isPlaying, setShuffle, handlePlayPause, handlePlayClick, handlePrevSong, handleNextSong, setReapeat, reapeat, shuffle}) {
  return (
    <div className='flex justify-center items-center'>
      <i className={`ri-repeat-2-fill fs-5 text-md pr-7 cursor-pointer ${reapeat ? "text-sky-500" : ""}`} onClick={(e) => setReapeat((prev) => !prev)}></i>
      <i className='ri-skip-back-mini-fill text-2xl cursor-pointer' onClick={handlePrevSong}></i>
     <div className='w-12 h-12 rounded-full overflow-hidden flex justify-center items-center hover:bg-sky-500 cursor-pointer'>
        {isPlaying && isActive ? <i className='ri-pause-fill icon-pause text-4xl px-3' onClick={handlePlayPause}></i> :
        <i className='ri-play-fill icon-play text-4xl px-3' onClick={handlePlayClick}></i>
        }
        
     </div>
      <i className='ri-skip-forward-mini-fill text-2xl cursor-pointer' onClick={handleNextSong}></i>
      <i className={`ri-shuffle-fill fs-5 text-md pl-7 cursor-pointer ${shuffle ? "text-sky-500" : ""}`}onClick={(e) => setShuffle((prev) => !prev)}></i>

    </div>
  )
}

export default Controls