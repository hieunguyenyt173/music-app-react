import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const TopAlbumItem = ({ playlist }) => {
  return (
    <Link to={`/playlists/${playlist?.key}`}>
      <div className="playlist-card group">
        <div className="w-full rounded-xl overflow-hidden relative">
          <img
            className="group-hover:scale-110 transition-all"
            src={playlist?.thumbnail}
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
  const NhacCuaTui = require("nhaccuatui-api-full");
  const [type, setType] = useState(0);
  const [listPlaylist, setListPlaylist] = useState([]);
  const tabs = [
    { title: "Mới và Hot", key: "moi-hot" },
    { title: "Việt Nam", key: "nhac-tre" },
    { title: "Âu Mỹ", key: "au-my" },
    { title: "Thiếu nhi", key: "thieu-nhi" },
  ];
  useEffect(() => {
    NhacCuaTui.explore({
      type: "playlist",
      key: tabs[type].key,
      page: 1,
      pageSize: 30,
    }).then((data) => setListPlaylist(data?.data));
  }, [tabs[type].key]);

 
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
                  ? "border-b-2 border-blue-700"
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
