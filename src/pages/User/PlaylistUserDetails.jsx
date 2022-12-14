import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SongItem from "../../components/SongItem";

import { likeList, playPause, removeLikePlaylist, setActiveSong, setLikePlaylist, setplaylistRecently } from "../../redux/features/playerSlice";
function PlaylistUserDetails() {
  const dispatch = useDispatch()
  const {isPlaying, activeSong} = useSelector((state) => state.player)
  const { user } = useSelector((state) => state.user)
  const { idPlaylist } = useParams();
  const [play,setPlay] = useState(false)
 
  const listPlaylistLike = JSON.parse(localStorage.getItem("listPlaylistLike"))
  const  playlistRecently = JSON.parse(localStorage.getItem("songRecently"))
  const  playlistUser = user?.playlistUser
  const  playlist =  playlistUser.find((playlist) => playlist?.key === +idPlaylist)
  const listSong = playlist?.songs
  
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

  
  
  return (
    <div className="lg:container mx-auto px-12 mb-10">
      <p className="heading text-[32px] font-bold text-sky-600 mb-3 ">Playlist</p>
      <div className="flex">
        <div className="w-[400px] h-[400px] text-center">
          <div className={`${isPlaying ? "rounded-full overflow-hidden animate-[spin_6s_linear_infinite] " : ""}`}>
          <img src={listSong.length > 0 ? listSong[0]?.thumbnailM : playlist.thumbnailB} alt="" className="w-full h-full object-cover"/>
          </div>
          <p className="my-5 ">{playlist[0]?.title}</p>
          
          {play && isPlaying? <div className="bg-blue-600 text-white px-4 py-2 rounded-xl flex justify-center items-center cursor-pointer hover:bg-blue-700" onClick={handlePausePlaylist}>
            <p>D???ng ph??t</p>
            <i className="ri-pause-line text-xl px-2"></i>
          </div> 
          :
          <div className="bg-blue-600 text-white px-4 py-2 rounded-xl flex justify-center items-center cursor-pointer hover:bg-blue-700" onClick={handlePlayPlaylist}>
            <p>Ph??t t???t c???</p>
            <i className="ri-play-line text-xl px-2"></i>
          </div>
          }
         
        </div>
        <div className="ml-8 w-full">
          
          <p>Danh s??ch b??i h??t :</p>
          <div className="h-[600px] overflow-y-auto">
            {!listSong && <p className="text-sm text-red-600 mt-3">Ch??a c?? b??i h??t n??o</p>}
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
