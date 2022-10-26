import React from "react";

function SongItem() {
  return (
    <div className="song-item flex items-center justify-between hover:bg-[#f5f7fa] px-3 py-2 rounded-r-lg">
      <div className="flex items-center">
        <p>1</p>
        <div className="w-16 h-16 rounded-lg overflow-hidden mx-4 relative">
          <img
            src="https://www.kri8thm.in/html/listen/theme/demo/images/cover/large/1.jpg"
            alt=""
          />
          <div className="play-button hidden hover:scale-110 w-8 h-8 rounded-full overflow-hidden bg-slate-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <i className="ri-play-fill icon-play text-xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></i>
          </div>
          <div className="hidden w-8 h-8 rounded-full overflow-hidden bg-slate-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <i className="ri-pause-fill icon-pause text-xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></i>
          </div>
        </div>
        <div>
          <a href="" className="text-sm font-medium">
            Find soul
          </a>
          <br />
          <a href="" className="text-xs text-gray-400">
            Rasomi Pelina
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <i className="ri-heart-line heart-empty text-2xl"></i>

        <p className="text-sm px-3">03:24</p>
        <i className="ri-more-fill text-2xl"></i>
      </div>
    </div>
  );
}

export default SongItem;
