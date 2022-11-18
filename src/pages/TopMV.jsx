import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { getTime } from "../components/MusicPlayer/Seekbar";
import { setvideoRecently } from "../redux/features/playerSlice";
import { useGetListMvHomeQuery } from "../redux/services/zingApi";

export const VideoItem = ({ video }) => {

  const dispatch = useDispatch()
  const videoRecently = JSON.parse(localStorage.getItem("videoRecently"))
  const handlePlayVideo = () => {
    if(videoRecently === null) {
      dispatch(setvideoRecently(video))
      
    }
    else  if(!videoRecently.find((item) => item.title === video.title)) {
      dispatch(setvideoRecently(video))
    }  
    else {
      return;
    }
  }
  
  return (
    <div className="flex-col group ">
      
        <div className="relative rounded-xl overflow-hidden">
        <Link to={`/videos/${video.encodeId}`}>
          <img
            className="group-hover:scale-105 duration-200"
            src={video?.thumbnailM}
            alt=""
          />
          <div className="hidden w-12 h-12 rounded-full overflow-hidden bg-slate-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] group-hover:block hover:scale-125 duration-150">
            <i className="ri-play-fill icon-play text-2xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" onClick={handlePlayVideo}></i>
          </div>
          </Link>
          <p className="absolute bottom-0 right-0 p-2 backdrop-blur-2xl text-sm text-white ">
            {getTime(video?.duration)}
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
      
    </div>
  );
};

function TopMV() {
  const [type, setType] = useState(0);
  const {data:vn, isFetching} = useGetListMvHomeQuery('IWZ9Z08I',"1", "20")
  const {data: us} = useGetListMvHomeQuery('IWZ9Z08O',"1", "20")
  const {data: korea} = useGetListMvHomeQuery('IWZ9Z08W',"1", "20")
  const [listVideo, setListVideo] = useState([]);
  const tabs = [
    { title: "Việt Nam", key: vn?.data?.items },
    { title: "Âu Mỹ", key : us?.data?.items },
    { title: "Hàn Quốc", key: korea?.data?.items },
  ];
  useEffect(() => {
   
    setListVideo(tabs[type]?.key)
  },[type])
  
  if(isFetching) return <Loader title="Loading ..." />
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
