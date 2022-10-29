import React from "react";
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Link } from 'react-router-dom'
import SongCard from "../../components/SongCard";
function TopChartsHome({data, activeSong, isPlaying}) {
    const topChartHome = data.slice(0, 10);
  console.log(data)
  return (
    
      <div className=" mt-5">
        
        <div className="flex justify-between items-center mb-5">
          <p className="heading text-[32px] font-bold text-sky-600">
            Những bản nhạc hàng đầu
          </p>
          <Link
            to="/top-charts"
            className="uppercase text-sm font-semibold underline text-sky-600 "
          >
            View All
          </Link>
        </div>
        <Swiper
        slidesPerView={5}
        spaceBetween={20}
        
        modules={[Pagination]}
        className="topcharts"
      >
        {topChartHome.map((song, i) => (
          <SwiperSlide key={i}>
            <SongCard
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={topChartHome}
            />
            </SwiperSlide>
        ))}
      </Swiper>
      </div>
    
  );
}

export default TopChartsHome;
