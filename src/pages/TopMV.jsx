import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const VideoItem = ({ video }) => {
  return (
    <div className="flex-col group ">
      <Link to={`/videos/${video.key}`}>
        <div className="relative rounded-xl overflow-hidden">
          <img
            className="group-hover:scale-105 duration-200"
            src={video?.thumbnail}
            alt=""
          />
          <div className="hidden w-12 h-12 rounded-full overflow-hidden bg-slate-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] group-hover:block hover:scale-125 duration-150">
            <i className="ri-play-fill icon-play text-2xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></i>
          </div>
          <p className="absolute bottom-0 right-0 p-2 bg-slate-600 text-sm text-white bg-gray-400">
            {video?.duration}
          </p>
        </div>
        <div className="">
          <p className="font-semibold text-sm mt-2">{video?.title}</p>
          <div className="">
            {video.artists.map((artist, i) => (
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
      </Link>
    </div>
  );
};

function TopMV() {
  const NhacCuaTui = require("nhaccuatui-api-full");
  const [type, setType] = useState(0);
  const [listVideo, setListVideo] = useState([]);
  const tabs = [
    { title: "Mới và Hot", key: "moi-hot" },
    { title: "Việt Nam", key: "nhac-tre" },
    { title: "Âu Mỹ", key: "au-my" },
    { title: "Hàn Quốc", key: "thieu-nhi" },
  ];
  useEffect(() => {
    NhacCuaTui.explore({
      type: "mv",
      key: tabs[type].key,
      page: 1,
      pageSize: 30,
    }).then((data) => setListVideo(data?.data));
  }, [tabs[type].key]);

  return (
    <div className="lg:container mx-auto px-12 mb-10">
      <div>
        <p className="heading text-[32px] font-bold text-sky-600 mt-7 mb-3">
          Top MV hàng đầu
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
            <div className="grid grid-cols-3 gap-5">
              {listVideo &&
                listVideo.map((video, i) => (
                  <VideoItem key={i} i={i} video={video} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMV;
