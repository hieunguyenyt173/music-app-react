import React from 'react'
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from '../../components/EventCard';
function Events() {
  return (
    <div className='mt-5'>
        <div className='w-1/2'>
        <div className="flex justify-between items-center mb-5">
          <p className="heading text-[32px] font-bold">
            Upcoming <span className=" text-sky-600">Events</span>
          </p>
          <a
            href="/"
            className="uppercase text-sm font-semibold underline text-sky-600 "
          >
            Explore more
          </a>
          </div>
          <Swiper
        slidesPerView={2}
        spaceBetween={20}
        
        modules={[Pagination]}
        className="topcharts"
      >
        <SwiperSlide><EventCard/></SwiperSlide>
        <SwiperSlide><EventCard/></SwiperSlide>
        <SwiperSlide><EventCard/></SwiperSlide>
        <SwiperSlide><EventCard/></SwiperSlide>
        <SwiperSlide><EventCard/></SwiperSlide>
        <SwiperSlide><EventCard/></SwiperSlide>
        <SwiperSlide><EventCard/></SwiperSlide>
      </Swiper>
        </div>
        
    </div>
  )
}

export default Events