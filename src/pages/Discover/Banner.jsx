import React from 'react'
import { Link } from 'react-router-dom';
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function Banner({data}) {
  return (
    
    <div className='rounded-2xl overflow-hidden'>
        
         <Swiper
        
        slidesPerView={3}
        spaceBetween={20}
        modules={[Pagination]}
        className="banner"
      >
          
     {data && data.map((img, i) => (
        <SwiperSlide key={i}>
        <Link to={`/playlists/${img.encodeId}`}>
        <div className=''>
        <img className='max-h-[500px] w-full object-cover hover:scale-105 duration-150' src={img.banner} alt="" />
        </div>
        </Link>
        </SwiperSlide>
     ))}
      </Swiper>
    </div>
  )
}

export default Banner