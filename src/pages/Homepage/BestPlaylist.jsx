import React from 'react'
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PlaylistCard from '../../components/PlaylistCard';
function BestPlaylist() {
  return (
    <div className=" mt-5">
        <p className="font-semibold text-xs uppercase">Collection to listen</p>
        <div className="flex justify-between items-center mb-5">
          <p className="heading text-[32px] font-bold">
            Best <span className=" text-sky-600">Playlist</span>
          </p>
          <a
            href="/"
            className="uppercase text-sm font-semibold underline text-sky-600 "
          >
            View All
          </a>
        </div>
        <Swiper
        slidesPerView={4}
        spaceBetween={20}
        
        modules={[Pagination]}
        className="topcharts"
      >
        <SwiperSlide><PlaylistCard/></SwiperSlide>
        <SwiperSlide><PlaylistCard/></SwiperSlide>
        <SwiperSlide><PlaylistCard/></SwiperSlide>
        <SwiperSlide><PlaylistCard/></SwiperSlide>
        <SwiperSlide><PlaylistCard/></SwiperSlide>
        <SwiperSlide><PlaylistCard/></SwiperSlide>
        <SwiperSlide><PlaylistCard/></SwiperSlide>
      </Swiper>
      </div>
  )
}

export default BestPlaylist