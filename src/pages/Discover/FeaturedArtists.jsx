import React from 'react'
import { Link } from 'react-router-dom';
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArtistCard from '../../components/ArtistCard';
function FeaturedArtists({artistTrending}) {
  
  return (
    <div className=" mt-7">
        
        <div className="flex justify-between items-center mb-3">
          <p className="heading text-[32px] font-bold text-sky-600">
          Nghệ sỹ nổi bật
          </p>
          <Link
            to="/nghe-sy"
            className="uppercase text-sm font-semibold underline text-sky-600 "
          >
            Tất cả
          </Link>
        </div>
        <Swiper
        slidesPerView={6}
        spaceBetween={20}
        
        modules={[Pagination]}
        className="topArtist"
      >
          {artistTrending && artistTrending.map((artist,i) => (
              <SwiperSlide key={i}>
                <ArtistCard
                artist={artist}
                />
                </SwiperSlide>
          ))}
        
        
      </Swiper>
      </div>
  )
}

export default FeaturedArtists