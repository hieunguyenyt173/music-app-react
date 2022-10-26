import React from 'react'
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArtistCard from '../../components/ArtistCard';
function FeaturedArtists() {
  return (
    <div className=" mt-5">
        <p className="font-semibold text-xs uppercase">New to listen</p>
        <div className="flex justify-between items-center mb-5">
          <p className="heading text-[32px] font-bold">
          Featured  <span className=" text-sky-600">Artists</span>
          </p>
          <a
            href="/"
            className="uppercase text-sm font-semibold underline text-sky-600 "
          >
            View All
          </a>
        </div>
        <Swiper
        slidesPerView={6}
        spaceBetween={20}
        
        modules={[Pagination]}
        className="topArtist"
      >
        <SwiperSlide><ArtistCard/></SwiperSlide>
        <SwiperSlide><ArtistCard/></SwiperSlide>
        <SwiperSlide><ArtistCard/></SwiperSlide>
        <SwiperSlide><ArtistCard/></SwiperSlide>
        <SwiperSlide><ArtistCard/></SwiperSlide>
        <SwiperSlide><ArtistCard/></SwiperSlide>
        <SwiperSlide><ArtistCard/></SwiperSlide>
      </Swiper>
      </div>
  )
}

export default FeaturedArtists