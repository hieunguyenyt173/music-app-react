import React from 'react'

function Controls({isActive, isPlaying, currentSongs, handlePlayPause, handlePlayClick}) {
  return (
    <div className='flex justify-center items-center'>
      <i className='ri-repeat-2-fill fs-5 text-md pr-5'></i>
      <i className='ri-skip-back-mini-fill text-2xl'></i>
     <div className='w-12 h-12 rounded-full overflow-hidden flex justify-center items-center border border-collapse'>
        {isPlaying && isActive ? <i className='ri-pause-fill icon-pause text-4xl px-3' onClick={handlePlayPause}></i> :
        <i className='ri-play-fill icon-play text-4xl px-3' onClick={handlePlayClick}></i>
        }
        
     </div>
      <i className='ri-skip-forward-mini-fill text-2xl'></i>
      <i className='ri-shuffle-fill fs-5 text-md pl-5'></i>

    </div>
  )
}

export default Controls