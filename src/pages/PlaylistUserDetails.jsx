import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SongItem from '../components/SongItem'
import { likeList, playPause, removeLikePlaylist, setActiveSong, setLikePlaylist, setplaylistRecently } from "../redux/features/playerSlice";
function PlaylistUserDetails() {
  const dispatch = useDispatch()
  const {isPlaying, activeSong} = useSelector((state) => state.player)

  const { idUser } = useParams();
  const [play,setPlay] = useState(false)
 
  const listPlaylistLike = JSON.parse(localStorage.getItem("listPlaylistLike"))
  const  playlistRecently = JSON.parse(localStorage.getItem("songRecently"))
  const  playlistUser = JSON.parse(localStorage.getItem("playlistUser"))
  
  const  playlist =  playlistUser.filter((playlist) => playlist?.key === +idUser)
  const listSong = playlist[0].songs
  console.log(playlist[0])
  console.log(playlistUser)
  console.log(listSong)
  console.log(playlist[0].thumbnailB)
  const handlePlayPlaylist = () => {
    if(listSong.length > 0) {
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
    dispatch(setLikePlaylist(playlist))
    
  }
  const handleRemoveLike = () => {
    if(listPlaylistLike) {
      listPlaylistLike.length > 0 && listPlaylistLike.map((playlistF,index) => {
        if(playlistF?.title === playlist?.title) {
          dispatch(removeLikePlaylist(index))
        }
      })
    }
  }
  const handleRemoveUserPlaylist = () => {

  }
  return (
    <div className="lg:container mx-auto px-12 mb-10">
      <p className="heading text-[32px] font-bold text-sky-600 mb-3 ">Playlist</p>
      <div className="flex">
        <div className="w-[400px] h-[400px] text-center">
          <div className={`${isPlaying ? "rounded-full overflow-hidden animate-[spin_6s_linear_infinite] " : ""}`}>
          <img src={listSong.length > 0 ? listSong[0]?.thumbnail : playlist[0].thumbnailB} alt="" />
          </div>
          <p className="my-5 ">{playlist[0]?.title}</p>
          
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
            <i className="ri-heart-fill  text-2xl  text-red-600 block cursor-pointer" onClick={handleRemoveLike}></i>
          }
            
            <i className=" ri-delete-bin-line text-2xl px-2 cursor-pointer" onClick={handleRemoveUserPlaylist}></i>
         </div>
        </div>
        <div className="ml-8 w-full">
          
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
    </div>
  );
}

export default PlaylistUserDetails;
