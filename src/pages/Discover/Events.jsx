import React from 'react'
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from '../../components/EventCard';
import SongItem from '../../components/SongItem';
function Events() {
  return (
    <div className='mt-5 flex justify-between'>
        <div className='w-6/12'>
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
        className="events"
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
        <div className='w-5/12'>
            <div className='flex'>
            <div className='text-sm px-3 ml-7'>
                <a href="">Recent</a>
            </div><div className='text-sm px-3'>
                <a href="">Trending</a>
            </div><div className='text-sm px-3'>
                <a href="">International</a>
            </div>
            </div>
            <div>
              <SongItem />
              <SongItem />
              <SongItem />
              <SongItem />
              <SongItem />
            </div>
        </div>
    </div>
  )
}

export default Events