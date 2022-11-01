import React from 'react'
import { Link } from 'react-router-dom'
import PlayPause from '../../components/PlayPause'

function VideoHot({data}) {
    const listVideo = data?.slice(0,3)
  return (
    <div className=" mt-7">
    <div className="flex justify-between items-center mb-3">
      <p className="heading text-[32px] font-bold text-sky-600">
        Video hot
      </p>
      <Link
        to="/video"
        className="uppercase text-sm font-semibold underline text-sky-600 "
      >
        Tất cả
      </Link>
    </div>
        
        <div className='grid grid-cols-3 gap-5'>
        
            {listVideo && listVideo.map((video, i) => (
                
                <div className='rounded-lg overflow-hidden hover:scale-105 duration-200 relative' key={i}>
                    <Link to={`/videos/${video.key}`}>
                    <img src={video.thumbnail} alt="" />
                    </Link>
                    <Link to={`/videos/${video.key}`}>
                    <div className='play-button w-12 h-12 rounded-full overflow-hidden bg-slate-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                        <i className="ri-play-fill icon-play text-2xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></i>
                    </div>
                    </Link>
                </div>   
                
            ))}
         
        </div>
        
  </div>
  )
}

export default VideoHot