import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SongItem from "../components/SongItem";
import SongCard from "../components/SongCard";
import PlaylistCard from "../components/PlaylistCard";
import { VideoItem } from "./TopMV";
function ArtistDetails() {
  const { artistId } = useParams();
  const [data, setData] = useState();
  const { getArtistDetail } = require("nhaccuatui-api-full");
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const [type, setType] = useState(0);
  const tabs = [
    { title: "BÀI HÁT", path: "song" },
    { title: "PLAYLIST", path: "playlist" },
    { title: "MV", path: "mv" },
  ];
  useEffect(() => {
    getArtistDetail(artistId).then((data) => setData(data));
  }, []);
  
  const artistInfo = data?.artist;
  const hotSong = data?.song?.song?.slice(0, 5);
  console.log(data)
  return (
    <div className="lg:container mx-auto px-12 mb-10">
      <div className="mb-10">
        <div className="flex justify-between ">
          <div className="w-2/5 flex-col justify-center items-center">
            <p className="heading text-[32px] font-bold text-sky-600 text-center">
              {artistInfo?.name}
            </p>
            <div className="w-56 h-56 rounded-full overflow-hidden my-3 mx-auto">
              <img src={artistInfo?.imageUrl} alt="" />
            </div>
            <div className="flex mt-3 justify-center">
              {artistInfo?.role.map((item, i) => (
                <div
                  className="bg-sky-500 text-xs px-2 py-2 mr-2 rounded-lg backdrop-blur-lg"
                  key={i}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="w-3/5">
            <div className="uppercase tex-sm font-semibold text-sky-700 text-center border-b-[0.5px]">
              Nổi bật
            </div>
            <div>
              {hotSong &&
                hotSong.map((song, i) => (
                  <SongItem
                    key={i}
                    i={i}
                    song={song}
                    activeSong={activeSong}
                    isPlaying={isPlaying}
                    data={hotSong}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-semibold text-sky-600">
        <div className="flex border-b-[0.5px] border-gray-400 mx-3">
        {tabs.map((tab, index) => (
            <div
              className={`text-sm  p-2  cursor-pointer w-20 text-center ${
                tabs[type].title === tab.title
                  ? "border-b-2 border-blue-700"
                  : ""
              }`}
              key={index}
            >
              <p onClick={(e) => setType(index)}>{tab.title}</p>
            </div>
          ))}
        </div>
        
      </div>
      {type === 0 && 
        <div>
          <p className=" text-3xl mb-3 font-semibold text-sky-600">Bài hát</p>
          <div className="grid grid-cols-6 gap-5 mb-7">
          {data?.song?.song.map((song, i) => (
            <SongCard 
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data?.song?.song}
            /> 
          ))}
          </div>
          <p className=" text-3xl mb-3 font-semibold text-sky-600">Xuất hiện trong</p>
        <div className="grid grid-cols-6 gap-5 mb-7">
        {data?.songNearly.map((song, i) => (
           <SongCard 
           song={song}
           i={i}
           isPlaying={isPlaying}
           activeSong={activeSong}
           data={data?.song?.song}
           /> 
        ))}
      </div>
        </div>
        
        } 
      {type === 1 && 
      <div>
        <p className=" text-3xl mb-3 font-semibold text-sky-600">Playlist</p>
          <div className="grid grid-cols-5 gap-5 mb-7">
          {data?.playlist?.playlist.map((playlist, i) => (
            <PlaylistCard 
            data={data?.playlist?.playlist}
            playlist={playlist}
            />
          ))}
          </div>
      </div>
      }
       {type === 2 && 
      <div>
        <p className=" text-3xl mb-3 font-semibold text-sky-600">MV</p>
          <div className="grid grid-cols-5 gap-5 mb-7">
          {data?.video?.video.map((video, i) => (
             <VideoItem key={i} i={i} video={video} />
          ))}
          </div>
      </div>
      }
      
    </div>
  );
}

export default ArtistDetails;
