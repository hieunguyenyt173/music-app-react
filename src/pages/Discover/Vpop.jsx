import React from 'react'
import { Link } from 'react-router-dom';
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SongCard from '../../components/SongCard';
function Vpop({data, isPlaying, activeSong}) {
  return (
    <div className=" mt-7">
        <div className="flex justify-between items-center mb-3">
          <p className="heading text-[32px] font-bold text-sky-600">
            Vpops
          </p>
          
        </div>
        <Swiper
        slidesPerView={6}
        spaceBetween={20}
        
        modules={[Pagination]}
        className="top"
      >
        {data && data.map((song, i) => (
          <SwiperSlide key={i}>
            <SongCard
            i={i}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            />
          </SwiperSlide>
        ))}
        
        
      </Swiper>
      </div>
  )
}

export default Vpop