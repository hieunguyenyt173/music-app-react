import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ArtistCard from "../components/ArtistCard";
import Loader from "../components/Loader";
import SongItem from "../components/SongItem";
import { useSearchQuery } from "../redux/services/zingApi";
import { TopAlbumItem } from "./TopAlbums";
import { VideoItem } from "./TopMV";

function Search() {
  const { keyword } = useParams();
  const { data, isFetching } = useSearchQuery(keyword);
  const {isPlaying, activeSong} = useSelector((state) => state.player)
  if(isFetching) return <Loader title="Loading..." />
  return (
    <div className="lg:container mx-auto px-12 mb-10">
      <p className="heading text-3xl font-bold text-sky-600 pb-3">
        Kết quả tìm kiếm
      </p>

      <div className="mt-3 mb-7">
        <p className="heading text-2xl font-bold text-sky-600 pb-3">Bài hát</p>
        <div className="grid grid-cols-2 gap-5">
          {
            data && data?.data?.songs.map((song, i) => (
                <SongItem 
                key={i}
                song={song}
                data={data?.data?.songs}
                isPlaying={isPlaying}
                activeSong={activeSong}
                i ={i}
                />
            ))
          }
        </div>
      </div>
      <div className="mt-3 mb-7">
        <p className="heading text-2xl font-bold text-sky-600 pb-3">Playlist</p>
        <div className="grid grid-cols-6 gap-5">
          {
            data && data?.data?.playlists.map((playlist, i) => (
              <TopAlbumItem 
              key={i}
               i={i} 
               playlist={playlist}
              />
            ))
          }
        </div>
      </div>
      <div className="mt-3 mb-7">
        <p className="heading text-2xl font-bold text-sky-600 pb-3">MV</p>
        <div className="grid grid-cols-3 gap-5">
          {
            data && data?.data?.videos.map((video, i) => (
              <VideoItem key={i} i={i} video={video} />
            ))
          }
        </div>
      </div>
      <div className="mt-3 mb-7">
        <p className="heading text-2xl font-bold text-sky-600 pb-3">Nghệ sỹ</p>
        <div className="grid grid-cols-5 gap-5">
          {
            data && data?.data?.artists.map((artist,i) => (
              <ArtistCard
              key ={i}
              artist={artist}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Search;
