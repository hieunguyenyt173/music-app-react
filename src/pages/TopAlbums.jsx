import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useGetTop100Query } from "../redux/services/zingApi";

export const TopAlbumItem = ({ playlist }) => {
 
  return (
    <Link to={`/playlists/${playlist?.encodeId}`}>
      <div className="playlist-card group">
        <div className="w-full rounded-xl overflow-hidden relative">
          <img
            className="group-hover:scale-110 transition-all"
            src={playlist?.thumbnailM}
            alt=""
          />
          <div className="hidden w-12 h-12 rounded-full overflow-hidden bg-slate-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] group-hover:block hover:scale-125 duration-150">
            <i className="ri-play-fill icon-play text-2xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></i>
          </div>
        </div>
        <p className="font-semibold text-sm mt-2">{playlist.title}</p>
      </div>
    </Link>
  );
};

const TopAlbums = () => {
  const {data, isFetching} = useGetTop100Query()
  
  const [type, setType] = useState(0);
  const [listPlaylist, setListPlaylist] = useState([]);
  const hotPlaylist = data?.data?.[0]?.items
  const playlistVn = data?.data?.[1]?.items
  const playlistUs = data?.data?.[3]?.items
  const playlistAsian = data?.data?.[2]?.items
  const tabs = [
    { title: "Nổi bật", path: hotPlaylist },
    { title: "Việt Nam", path: playlistVn },
    { title: "Âu Mỹ", path:playlistUs },
    { title: "Châu Á", path: playlistAsian },
  ];
  useEffect(() => {
    setListPlaylist(tabs[type].path)
  }, [tabs[type].path]);

 if(isFetching) {
  return <Loader title={"Loading..."} />
 }
  return (
    <div className="lg:container mx-auto px-12 mb-10">
      <div>
        <p className="heading text-[32px] font-bold text-sky-600 mt-7 mb-3">
          Top Album hàng đầu
        </p>
        <div className="flex border-b-[0.5px] border-gray-400 mx-3 justify-center pb-5">
          {tabs.map((tab, index) => (
            <div
              className={`text-md  px-3 py-2 cursor-pointer duration-300 ${
                tabs[type].title === tab.title
                  ? "border-b-2 border-blue-700 -mb-px"
                  : ""
              }`}
              key={index}
            >
              <p onClick={(e) => setType(index)}>{tab.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-7 flex justify-center">
          <div className="">
            <div className="grid grid-cols-5 gap-5">
              {listPlaylist &&
                listPlaylist.map((playlist, i) => (
                  <TopAlbumItem key={i} i={i} playlist={playlist} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAlbums;
