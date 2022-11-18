import React, {useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import { likeVideo, removeVideoLike } from '../redux/features/authSlice';
import { playPause, } from '../redux/features/playerSlice';
import { useUpdateUserMutation } from '../redux/services/userApi';
import { useGetMvDetailsQuery } from '../redux/services/zingApi';



export const VideoListItem = () => {
    return (
        <div className='flex items-center'>
          
        </div>
    )
}



function MvDetails() {
  const {videoId} = useParams()
  const {data , isFetching} = useGetMvDetailsQuery(videoId)
    
    const video = data?. data
    const dispatch = useDispatch();
    const {isPlaying} = useSelector((state) => state.player)
    const { user, auth } = useSelector((state) => state.user)
    const [updateUser] = useUpdateUserMutation()
   
    const listVideoLike = user.videoFavorites
    
    if(isPlaying) {
        dispatch(playPause(false))
    }
    console.log(video)
    const ref = useRef(null)
    // if(ref) {
    //   ref.current.play();
    //  }

    const handleLike = () => {
      if(!auth) {
        alert("Vui lòng đăng nhập để sử dụng chức năng này")
        return;
      }
      dispatch(likeVideo(video))
      const newUpdate = {...user, videoFavorites: [...user.videoFavorites, video]}
      
      updateUser(newUpdate)
    }
    const handleRemoveLike = () => {
      const newUpdate = {...user, videoFavorites : [...user.videoFavorites].filter((s) => s.title !== video.title)}
      listVideoLike.map((songFavor, index) => {
        if(songFavor.title === video.title) {
         dispatch(removeVideoLike(index))
         updateUser(newUpdate)
        }
      })
      
    }
  return (
    <div className='container mx-auto px-12'>
      <p className="heading text-[32px] font-bold text-sky-600 mb-3 ">MV</p>
       <div className="flex-col w-full">
        <div className='flex items-center'>
            <video 
            className='w-full bg-black min-h-[600px]'
            controls
            
            ref={ref}
            src={data?.data?.streaming?.mp4?.["720p"]}>
            
            </video>
        </div>
       <div className='flex items-center py-5'>
            <div className='w-10 h-10 rounded-full overflow-hidden'>
                <img src={data?.data?.artist?.thumbnail} alt="" />
            </div>
            <div className="flex-col mx-3">
            <p className='font-semibold text-md'>{data?.data?.title}</p>
            <div className="flex">
          {video?.artists.map((artist,i) => (
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
            <div className="flex my-3 mx-5">
         { !listVideoLike || !listVideoLike.find((item) => item?.title === video?.title) ? <i className="ri-heart-line  text-2xl " onClick={handleLike}></i>
            :
            <i className="ri-heart-fill  text-2xl  text-red-600 block" onClick={handleRemoveLike}></i>
          }
            
            <i className=" ri-more-fill text-2xl px-2"></i>
         </div>
        </div>
       </div>
       <div className='px-5'>
        <p  className='border-b-[0.5px] border-gray-500 pb-2 heading text-[32px] font-bold text-sky-600 mb-3' >
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