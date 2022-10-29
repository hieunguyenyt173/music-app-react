import React from "react";
import SongItem from "../../components/SongItem";
import { track } from "../../assets/";
import { Link } from "react-router-dom";
export const AlbumItem = ({item}) => {
  
  return (
    <Link to="">
      <div className="flex group p-3 hover:bg-[#f5f7fa] rounded-md">
      <div className="relative flex z-[3]">
      <div className="h-24 w-24">
        <img 
        className="h-full w-full object-cover absolute z-[3]"
        src={item?.thumbnailM} alt="" />
      </div>

      <div className="h-24 w-24 left-0 absolute z-[2] group-hover:left-12 overflow-hidden duration-300 ease-linear">
        <img 
        className="h-full w-full object-cover scale-125"
        src={track} alt="" />
      </div>
      </div>
      <div className="flex-col items-center ml-5 group-hover:ml-12 duration-300 ease-linear py-3">
        <p className="text-sm font-medium mb-2">{item?.title}</p>
        <p className="text-xs">{item?.artistsNames}</p>
      </div>
    </div>
    </Link>
    
  );
};

function TopAlbums({data}) {
  const listAlbum = data?.data?.items[3]?.items[0]?.album.slice(0,12)
  return (
    <div className=" mt-7">
      <div className="flex justify-between items-center text-sky-600">
        <p className="heading text-[32px] font-bold">
          Albums mới phát hành
        </p>
        <a
          href="/"
          className="uppercase text-sm font-semibold underline text-sky-600 "
        >
          View All
        </a>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {listAlbum.map((item, i) => (
          <AlbumItem 
          key={i}
            item={item}
          />
        ))}
        
      </div>
    </div>
  );
}

export default TopAlbums;
