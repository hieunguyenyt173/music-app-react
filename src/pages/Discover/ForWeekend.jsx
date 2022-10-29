import React from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import PlayPause from '../../components/PlayPause';
import { playPause, setActiveSong } from '../../redux/features/playerSlice';
function ForWeekend({dataPlaylist,isPlaying, activeSong}) {
    const data = dataPlaylist?.data?.items[4]?.items
    console.log(dataPlaylist?.data?.items[3]?.items[0]?.album)

    const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false))
  };
  const handlePlayClick = () => {
     
      dispatch(setActiveSong(data))
      dispatch(playPause(true))
      
  };
  return (
    <div className=" mt-5">
        <div className="flex justify-between items-center mb-5">
          <p className="heading text-[32px] font-bold text-sky-600">
           Thư giãn cuối tuần
          </p>
          <a
            href="/"
            className="uppercase text-sm font-semibold underline text-sky-600 "
          >
            Tất cả
          </a>
        </div>
        <div className='grid grid-cols-5 gap-4'>
            {data.map((song,i) => (
                <div className="song-card max-w-[240px group" key={i}>
                <div className=" max-h-[240px] rounded-2xl overflow-hidden relative">
                  <img
                    className="group-hover:scale-110 transition-all group-hover:opacity-90"
                    src={song.thumbnailM}
                    alt="song-img"
                  />
                  <span className="like-icon hidden absolute top-4 left-4 hover:scale-125">
                    <i className="ri-heart-fill text-slate-100 text-2xl opacity-60"></i>
                  </span>
                  <div
                    className={`play-button  hover:scale-110 w-12 h-12 rounded-full overflow-hidden bg-slate-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ${isPlaying &&
                      activeSong?.title === song?.title ? "block" : "hidden"
                    }`}
                  >
                    <PlayPause 
                    song={song}
                    activeSong={activeSong}
                    isPlaying={isPlaying}
                    handlePause={handlePauseClick}
                    handlePlay={handlePlayClick}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <Link
                    to={`/songs/${song?.key}`}
                    className="font-semibold text-sm mt-2 hover:text-sky-700"
                  >
                    {song?.title}
                  </Link>
                  <p
                   
                    className="text-[13px] text-gray-500 pb-3 truncate truncate "
                  >
                    {song?.sortDescription}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
  )
}

export default ForWeekend