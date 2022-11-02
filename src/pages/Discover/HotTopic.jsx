import React from 'react'
import { Link } from 'react-router-dom';
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function HotTopic({data}) {
  return (
    <div className=" mt-7">
        <div className="flex justify-between items-center mb-3">
          <p className="heading text-[32px] font-bold text-sky-600">
            Chủ đề hot
          </p>
          <Link
            to="/the-loai"
            className="uppercase text-sm font-semibold underline text-sky-600 "
          >
            Tất cả
          </Link>
        </div>
        <Swiper
        slidesPerView={4}
        spaceBetween={20}
        
        modules={[Pagination]}
        className="live-radios"
      >
          {data && data.map((topic,i) => (
            <SwiperSlide key={i}>
              <Link
              to={`/the-loai/${topic.key}`}
              >
              <div className='relative'>
                <img 
                className='w-full h-full object-cover'
                src={topic?.coverImageURL} alt="" />
              </div>
              </Link>
            </SwiperSlide>
          ))}
        
        
      </Swiper>
      </div>
  )
}

export default HotTopic