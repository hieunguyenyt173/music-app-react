import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SongItem from "../components/SongItem";
import SongCard from "../components/SongCard";
import PlaylistCard from "../components/PlaylistCard";
import { VideoItem } from "./TopMV";
import { useGetArtistDetailQuery } from "../redux/services/zingApi";
import Loader from '../components/Loader'
import ArtistCard from "../components/ArtistCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
function ArtistDetails() {
  const { artistId } = useParams();
  
 const {data, isFetching} = useGetArtistDetailQuery(artistId)
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const [type, setType] = useState(0);
  const tabs = [
    { title: "BÀI HÁT"},
    { title: "PLAYLIST"},
    { title: "MV"},
  ];
  
  
  const hotSong = data?.data?.sections[0]?.items?.slice(0, 5);
  
  
  return (
    <div className="lg:container mx-auto px-12 mb-10">
      {isFetching ? <Loader /> : 
      <>
       <div className="mb-10">
        <div className="flex justify-between ">
          <div className="w-2/5 flex-col justify-center items-center">
            <p className="heading text-[32px] font-bold text-sky-600 text-center">
              {data?.data?.name}
            </p>
            <div className="w-56 h-56 rounded-full overflow-hidden my-3 mx-auto">
              <img src={data?.data?.thumbnailM} alt="" />
            </div>
            <div className="flex-col mt-3 justify-center text-center">
             <p className="text-sm  "> Tên thật : {data?.data?.realname}</p>
             <p className="text-sm  mt-2"> Sinh nhật : {data?.data?.birthday}</p>
             <p className="text-xs  mt-2 leading-5">{data?.data?.sortBiography}</p>
             
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
          {data?.data?.sections[0]?.items.map((song, i) => (
            <SongCard 
            key={i}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data?.data?.sections[0]?.items}
            /> 
          ))}
          </div>
          <p className=" text-3xl mb-3 font-semibold text-sky-600">Xuất hiện trong</p>
        <div className="grid grid-cols-6 gap-5 mb-7">
        {data?.data?.sections[5]?.items.map((playlist, i) => (
           <PlaylistCard 
           key={i}
           playlist={playlist}
           data={data?.data?.sections[5]?.items}
           /> 
        ))}
      </div>
         <p className=" text-3xl mb-3 font-semibold text-sky-600">Bạn có thể thích</p>
        
         <Swiper
        slidesPerView={5}
        spaceBetween={20}
        
        modules={[Pagination]}
        className="topArtist"
      >
          {data?.data?.sections[6]?.items.map((artist,i) => (
              <SwiperSlide key={i}>
                <ArtistCard
                artist={artist}
                />
                </SwiperSlide>
          ))}
        
        
      </Swiper>
        </div>
        
        
        } 
      {type === 1 && 
      <div>
        <p className=" text-3xl mb-3 font-semibold text-sky-600">Album</p>
          <div className="grid grid-cols-5 gap-5 mb-7">
          {data?.data?.sections[2]?.items.map((playlist, i) => (
            <PlaylistCard 
            data={[]}
            playlist={playlist}
            />
          ))}
          </div>
          <p className=" text-3xl mb-3 font-semibold text-sky-600">Single & EP</p>
          <div className="grid grid-cols-5 gap-5 mb-7">
          {data?.data?.sections[1]?.items.map((playlist, i) => (
            <PlaylistCard 
            data={[]}
            playlist={playlist}
            />
          ))}
          </div>
          <p className=" text-3xl mb-3 font-semibold text-sky-600">Tuyển tập</p>
          <div className="grid grid-cols-5 gap-5 mb-7">
          {data?.data?.sections[4]?.items.map((playlist, i) => (
            <PlaylistCard 
            data={[]}
            playlist={playlist}
            />
          ))}
          </div>
      </div>
      }
       {type === 2 && 
      <div>
        <p className=" text-3xl mb-3 font-semibold text-sky-600">MV</p>
          <div className="grid grid-cols-3 gap-5 mb-7">
          {data?.data?.sections[3]?.items.map((video, i) => (
             <VideoItem key={i} i={i} video={video} />
          ))}
          </div>
      </div>
      }</>
      }
     
      
    </div>
  );
}

export default ArtistDetails;
