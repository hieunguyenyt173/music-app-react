import React from 'react'
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SongCard from '../../components/SongCard';
function NewReleases() {
  return (
    
      <div className=" mt-5">
        <p className="font-semibold text-xs uppercase">Best to listen</p>
        <div className="flex justify-between items-center mb-5">
          <p className="heading text-[32px] font-bold">
            New <span className=" text-sky-600">Releases</span>
          </p>
          <a
            href="/"
            className="uppercase text-sm font-semibold underline text-sky-600 "
          >
            View All
          </a>
        </div>
        <Swiper
        slidesPerView={5}
        spaceBetween={20}
        
        modules={[Pagination]}
        className="topcharts"
      >
        <SwiperSlide><SongCard/></SwiperSlide>
        <SwiperSlide><SongCard/></SwiperSlide>
        <SwiperSlide><SongCard/></SwiperSlide>
        <SwiperSlide><SongCard/></SwiperSlide>
        <SwiperSlide><SongCard/></SwiperSlide>
        <SwiperSlide><SongCard/></SwiperSlide>
        <SwiperSlide><SongCard/></SwiperSlide>
      </Swiper>
      </div>
    
  )
}

export default NewReleases