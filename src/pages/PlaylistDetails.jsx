import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SongItem from '../components/SongItem'
import { playPause, setActiveSong } from "../redux/features/playerSlice";
function PlaylistDetails() {
  const NhacCuaTui = require("nhaccuatui-api-full");
  const dispatch = useDispatch()
  const {isPlaying, activeSong} = useSelector((state) => state.player)
  const [playlist, setPlaylist] = useState();
  const { idPlaylist } = useParams();
  const [play,setPlay] = useState(false)
  
  const listSong = playlist?.songs
  useEffect(() => {
    NhacCuaTui.getPlaylistDetail(idPlaylist).then((data) =>
      setPlaylist(data?.playlist)  
    );
  }, [idPlaylist]);
  
  const handlePlayPlaylist = () => {
    dispatch(playPause(true))
    setPlay((prev) => !prev)
    dispatch(setActiveSong({song : listSong[0], i : 0, data: listSong}))
  }
  const handlePausePlaylist = () => {
    dispatch(playPause(false))
    setPlay(false)
  }
  return (
    <div className="lg:container mx-auto px-12 mb-10">
      <p className="heading text-[32px] font-bold text-sky-600 mb-3">Playlist</p>
      <div className="flex">
        <div className="w-[400px] h-[400px] text-center">
          <img src={playlist?.thumbnail} alt="" />
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
                      ? `/artists/${playlist?.artist?.shortLink}`
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
          {play ? <div className="bg-blue-600 text-white px-4 py-2 rounded-xl flex justify-center items-center cursor-pointer hover:bg-blue-700" onClick={handlePausePlaylist}>
            <p>Dừng phát</p>
            <i className="ri-pause-line text-xl px-2"></i>
          </div> 
          :
          <div className="bg-blue-600 text-white px-4 py-2 rounded-xl flex justify-center items-center cursor-pointer hover:bg-blue-700" onClick={handlePlayPlaylist}>
            <p>Phát tất cả</p>
            <i className="ri-play-line text-xl px-2"></i>
          </div>
          }
         
        </div>
        <div className="ml-8 w-full">
          <div className="flex items-center mb-5">
            <div className="w-7 h-7 overflow-hidden rounded-full">
              <img src={playlist?.uploadBy?.avatarUrl} alt="" />
            </div>
            <p className="text-xs text-gray-500 px-2">
              Upload bởi: {playlist?.uploadBy?.userName}
            </p>
          </div>
          <p>Danh sách bài hát :</p>
          <div className="h-[600px] overflow-y-auto">
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

export default PlaylistDetails;
