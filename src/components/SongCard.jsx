import React from "react";

function SongCard() {
  return (
    <>
      <div className="song-card max-w-[260px]">
        <div className=" max-h-[260px] rounded-2xl overflow-hidden relative">
          <img
            src="https://www.kri8thm.in/html/listen/theme/demo/images/cover/large/1.jpg"
            alt=""
          />
          <span className="like-icon hidden absolute top-4 left-4 hover:scale-125">
            <i className="ri-heart-fill text-slate-100 text-2xl opacity-60"></i>
          </span>
          <div className="play-button hidden hover:scale-110 w-14 h-14 rounded-full overflow-hidden bg-slate-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <i className="ri-play-fill icon-play text-3xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></i>
          </div>
          <div className="hidden w-14 h-14 rounded-full overflow-hidden bg-slate-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <i className="ri-pause-fill icon-pause text-3xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></i>
          </div>
        </div>
        <div className="flex flex-col">
          <a href="#" className="font-semibold text-sm mt-2 ">
            I love you mummy
          </a>
          <a
            href="#"
            className="text-[13px] text-gray-500 hover:underline pb-3"
          >
            Arebica Luna
          </a>
        </div>
      </div>
    </>
  );
}

export default SongCard;
