import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import SongItem from '../components/SongItem'
import { likePlaylist, removeLikePlaylist } from "../redux/features/authSlice";
import { playPause, setActiveSong, setLikePlaylist, setplaylistRecently } from "../redux/features/playerSlice";
import { useUpdateUserMutation } from "../redux/services/userApi";
import { useGetPlaylistDetailQuery } from "../redux/services/zingApi";
function PlaylistDetails() {
  
  const dispatch = useDispatch()
  const {isPlaying, activeSong} = useSelector((state) => state.player)

  const { idPlaylist } = useParams();
  const [play,setPlay] = useState(false)
  
  const  playlistRecently = JSON.parse(localStorage.getItem("songRecently"))
 
  const { user } = useSelector((state) => state.user)
  const [updateUser] = useUpdateUserMutation()
 
  const listPlaylistLike = user.playlist

  
  const {data,isFetching} = useGetPlaylistDetailQuery(idPlaylist)
  const listSong = data?.data?.song?.items
  const playlist = data?.data
  if(isFetching) return <Loader title="Loading ... " />
  const handlePlayPlaylist = () => {
    if(listSong) {
      dispatch(playPause(true))
    }
    else {
      return;
    }
    
    setPlay((prev) => !prev)
    dispatch(setActiveSong({song : listSong[0], i : 0, data: listSong}))
    if(playlistRecently === null) {
      dispatch(setplaylistRecently(playlist))
      
    }
    else  if(!playlistRecently.find((item) => item.title === playlist.title)) {
      dispatch(setplaylistRecently(playlist))
    }  
    else {
      return;
    }
  }
  const handlePausePlaylist = () => {
    dispatch(playPause(false))
    setPlay(false)
  }

  const handleLike = () => {
    dispatch(likePlaylist(playlist))
    const newUpdate = {...user, playlist: [...user.playlist, playlist]}
    
    updateUser(newUpdate)
  }
  const handleRemoveLike = () => {
    const newUpdate = {...user, playlist : [...user.playlist].filter((s) => s.title !== playlist.title)}
    listPlaylistLike.map((songFavor, index) => {
        if(songFavor.title === playlist.title) {
         dispatch(removeLikePlaylist(index))
         updateUser(newUpdate)
        }
      })
  }
  return (
    <div className="lg:container mx-auto px-12 mb-10">
      <p className="heading text-[32px] font-bold text-sky-600 mb-3 ">Playlist</p>
      {isFetching ? <Loader /> : 
      <div className="flex">
      <div className="w-[400px] h-[400px] text-center">
        <div className={`${isPlaying && playlist ? "rounded-full overflow-hidden animate-[spin_6s_linear_infinite] " : ""}`}>
        <img src={playlist?.thumbnailM || "https://photo-zmp3.zmdcdn.me/album_default.png"} alt="" />
        </div>
        <p className="my-2 ">{playlist?.title}</p>
        <p className="text-xs text-gray-500">
          Cập nhật : {playlist?.dateModify}
        </p>
        <div className="">
          {playlist &&
            playlist.artists.map((artist, i) => (
              <Link
                to={
                  playlist?.artists
                    ? `/artists/${playlist?.artist?.alias}`
                    : `/top-artists`
                }
                className="text-[13px] text-gray-500 hover:underline pb-3 pr-1"
                key={i}
              >
                {artist.name}
                {playlist.artists.length > 1 && i === 0 ? "," : ""}
              </Link>
            ))}
        </div>
        {play && isPlaying? <div className="bg-blue-600 text-white px-4 py-2 rounded-xl flex justify-center items-center cursor-pointer hover:bg-blue-700" onClick={handlePausePlaylist}>
          <p>Dừng phát</p>
          <i className="ri-pause-line text-xl px-2"></i>
        </div> 
        :
        <div className="bg-blue-600 text-white px-4 py-2 rounded-xl flex justify-center items-center cursor-pointer hover:bg-blue-700" onClick={handlePlayPlaylist}>
          <p>Phát tất cả</p>
          <i className="ri-play-line text-xl px-2"></i>
        </div>
        }
       <div className="flex my-3 justify-center">
       { !listPlaylistLike || !listPlaylistLike.find((item) => item?.title === playlist?.title) ? <i className="ri-heart-line  text-2xl " onClick={handleLike}></i>
          :
          <i className="ri-heart-fill  text-2xl  text-red-600 block" onClick={handleRemoveLike}></i>
        }
          
          <i className=" ri-more-fill text-2xl px-2"></i>
       </div>
      </div>
      <div className="ml-8 w-full">
        <div className="flex items-center mb-5">
          <div className="w-7 h-7 overflow-hidden rounded-full">
            <img src={playlist?.uploadBy?.avatarUrl} alt="" />
          </div>
          <p className="text-xs text-gray-500 px-2">
            Upload bởi: {playlist?.uploadBy?.userName || playlist?.title}
          </p>
        </div>
        <p>Danh sách bài hát :</p>
        <div className="h-[600px] overflow-y-auto">
          {!listSong && <p className="text-sm text-red-600 mt-3">Chưa có bài hát nào</p>}
          {listSong && listSong.map((song, i) => (
            <SongItem 
            key={i}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            i={i}
            data={listSong}
            />
          ))}
        </div>
      </div>
    </div>
      }
      
    </div>
  );
}

export default PlaylistDetails;
