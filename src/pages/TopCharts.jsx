import React from "react";
import { useSelector } from "react-redux";
import SongCard from '../components/SongCard'
import { useGetTopChartsQuery } from "../redux/services/musicApp";
function TopCharts() {
  const {data} = useGetTopChartsQuery()
  const { isPlaying, activeSong} = useSelector((state) => state.player)
    
  return (
    <div className="lg:container mx-auto px-12 mb-10">
      <p className="font-semibold text-xs uppercase">Listen Top Charts</p>

      <p className="heading text-[32px] font-bold">
        Top <span className=" text-sky-600">Charts</span>
      </p>
      
       <div className="grid grid-cols-5 gap-4 mt-5">
       {data?.map((song, i) => (
          <div className="" key={song.key}>
          <SongCard 
          data={data}
          i={i}
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          />
          </div>
        ))}
       </div>
      
    </div>
  );
}

export default TopCharts;
