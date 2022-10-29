import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from '../../components/EventCard';
import SongItem from '../../components/SongItem';
import { events } from '../../assets/constants';
function Events({weekCharts,activeSong, isPlaying}) {
  const topChartVn = weekCharts?.vn?.items.slice(0, 5)
  const topChartUs = weekCharts?.us?.items.slice(0, 5)
  const topChartKorea = weekCharts?.korea?.items.slice(0, 5)
  const tabs= [{title: "VIỆT NAM", list: topChartVn},{title: "US-UK", list: topChartUs},{title: "K-POP", list: topChartKorea},
      ]
  const [type, setType] = useState(0)
  const [listChart, setListChart] = useState([])
    console.log(topChartVn)
  
   useEffect((() => {
    setListChart(tabs[type].list) 

   }),[type])  
       
  return (
    <div className='mt-5 flex justify-between'>
        <div className='w-6/12 mt-5'>
        <div className="flex justify-between items-center mb-5">
          <p className="heading text-[32px] font-bold text-sky-600">
            Sự kiện
          </p>
          
          </div>
          <Swiper
        slidesPerView={2}
        spaceBetween={20}
        
        modules={[Pagination]}
        className="events"
      >
        <div className='grid grid-cols-2'>
        {events.map((e,i ) => (
          <SwiperSlide key={i}>
          <EventCard
          event ={e}
          />
          </SwiperSlide>
        
        ))}
        </div>
        
      </Swiper>
        </div>
        <div className='w-5/12'>
              <div className="flex justify-center">
              <Link to="/" className='uppercase text-sm font-semibold underline text-sky-600 text-center mb-2'>Bảng xếp hạng tuần</Link>
              </div>
            <div className='flex border-b-[0.5px] border-gray-400 mx-3'>
              {tabs.map((tab,index) => (
                <div className={`text-sm  p-2  cursor-pointer ${tabs[type].title === tab.title ? "border-b-2 border-blue-700" : ""}`} key={index}>
                <p onClick={(e) => setType(index)}>{tab.title}</p>
              </div>
              ))}
              
            
            </div>
            <div>
              {listChart.map((song, i) => (
                 <SongItem 
                 key={i}
                 i={i}
                 song={song}
                 activeSong={activeSong}
                 isPlaying={isPlaying}
                 data={listChart}
                 />
              ))}
               
                
            </div>
        </div>
    </div>
  )
}

export default Events