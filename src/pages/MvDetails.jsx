import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import { playPause } from '../redux/features/playerSlice';



export const VideoListItem = () => {
    return (
        <div className='flex items-center'>

        </div>
    )
}



function MvDetails() {
    const NhacCuaTui = require("nhaccuatui-api-full");
    const {videoId} = useParams()
    const [video, setVideo] = useState()
    const dispatch = useDispatch();
    const {isPlaying} = useSelector((state) => state.player)
    if(isPlaying) {
        dispatch(playPause(false))
    }
    const ref = useRef(null)
    useEffect(() => {
        NhacCuaTui.getVideoDetail(videoId).then((data) => setVideo(data?.video))
       if(ref) {
        ref.current.play();
       }
    },[videoId])
  return (
    <div className='flex container mx-auto px-12'>
       <div className="flex-col w-full">
        <div className='flex items-center'>
            <video 
            className='w-full bg-black'
            controls
            ref={ref}
            src={video?.streamUrls[0]?.streamUrl}>
            
            </video>
        </div>
       <div className='flex items-center py-5'>
            <div className='w-10 h-10 rounded-full overflow-hidden'>
                <img src={video?.artists[0]?.imageUrl} alt="" />
            </div>
            <div className="flex-col mx-3">
            <p className='font-semibold text-md'>{video?.title}</p>
            <div className="">
          {video && video?.artists.map((artist,i) => (
              <Link
              to={
                video?.artists
                  ? `/artists/${video?.artist?.shortLink}`
                  : `/top-artists`
              }
              className="text-[13px] text-gray-500 hover:underline pb-3 pr-1"
              key={i}
              >
              {artist.name}
              {video.artists.length > 1 && i === 0 ? "," : ""}
            </Link>
            
          ))}
          </div>
            </div>
        </div>
       </div>
       <div className='w-[400px] px-5'>
        <p  className='border-b-[0.5px] border-gray-500 pb-2' >
            Danh sách phát
        </p>
        <div>
            Chưa có danh sách phát
        </div>
       </div>
    </div>
  )
}

export default MvDetails