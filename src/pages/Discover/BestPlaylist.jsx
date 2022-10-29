import React from 'react'
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PlaylistCard from '../../components/PlaylistCard';
import { useGetPlayListQuery } from '../../redux/services/zingApi';
function BestPlaylist() {
  const {data} = useGetPlayListQuery()
  const banner = data?.data?.items[0]?.items
  
  return (
    <div className=" mt-5">
        <div className="flex justify-between items-center mb-5">
          <p className="heading text-[32px] font-bold text-sky-600">
           Playlist nổi bật
          </p>
        </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={20}
        
        modules={[Pagination]}
        className="best-playlist"
      >
        {banner?.map((item,i) => (
          <SwiperSlide key={i}>
            <PlaylistCard
              item={item}
            />
            </SwiperSlide>
        ))}
        
      </Swiper>
      </div>
  )
}

export default BestPlaylist