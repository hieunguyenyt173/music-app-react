import React from 'react'
import { Link } from 'react-router-dom';
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PlaylistCard from '../../components/PlaylistCard';
function Top100Home({data}) {
  return (
    <div className=" mt-7">
        <div className="flex justify-between items-center mb-3">
          <p className="heading text-[32px] font-bold text-sky-600">
           Top 100
          </p>
          <Link
            to="/top100"
            className="uppercase text-sm font-semibold underline text-sky-600 "
          >
            Tất cả
          </Link>
        </div>
        <Swiper
        slidesPerView={6}
        spaceBetween={20}
        
        modules={[Pagination]}
        className="top"
      >
        {data && data.map((playlist, i) => (
          <SwiperSlide key={i}>
           <PlaylistCard 
           data={data}
           playlist={playlist}
           />
          </SwiperSlide>
        ))}
        
        
      </Swiper>
      </div>
  )
}

export default Top100Home