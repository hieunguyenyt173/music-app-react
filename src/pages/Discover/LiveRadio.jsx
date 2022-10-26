import React from 'react'
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SongCard from '../../components/SongCard';
function LiveRadio() {
  return (
    <div className=" mt-5">
        <p className="font-semibold text-xs uppercase">Listen live now</p>
        <div className="flex justify-between items-center mb-5">
          <p className="heading text-[32px] font-bold">
            Live <span className=" text-sky-600">Radios</span>
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
        className="live-radios"
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

export default LiveRadio