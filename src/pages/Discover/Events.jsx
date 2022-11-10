import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from "../../components/EventCard";
import SongItem from "../../components/SongItem";
import { events } from "../../assets/constants";



function Events({ activeSong, isPlaying, data }) {
    const weekchartVN = data?.vn?.items.slice(0,5)
    const weekchartUs = data?.us?.items.slice(0,5)
    const weekchartKorea = data?.korea?.items.slice(0,5)
  
  const tabs = [
    { title: "VIỆT NAM", list:  weekchartVN},
    { title: "US-UK", list:  weekchartUs},
    { title: "K-POP", list:  weekchartKorea},
  ];
  const [type, setType] = useState(0);
  const [listWeekChart, setListWeekChart] = useState([]);
      
  
    useEffect(() => {
      setListWeekChart(tabs[type].list)
    
  },[type]);

  return (
    <div className="mt-7 flex justify-between">
      <div className="w-6/12 mt-5">
        <div className="flex justify-between items-center mb-3">
          <p className="heading text-[32px] font-bold text-sky-600">Sự kiện</p>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          modules={[Pagination]}
          className="events"
        >
          <div className="grid grid-cols-2">
            {events.map((e, i) => (
              <SwiperSlide key={i}>
                <EventCard event={e} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <div className="w-5/12">
        <div className="flex justify-center">
          <p className="uppercase text-md font-semibold text-sky-600 text-center mb-2">
            Bảng xếp hạng tuần
          </p>
        </div>
        <div className="flex border-b-[0.5px] border-gray-400 mx-3">
          {tabs.map((tab, index) => (
            <div
              className={`text-sm  p-2  cursor-pointer ${
                tabs[type].title === tab.title
                  ? "border-b-2 border-blue-700"
                  : ""
              }`}
              key={index}
            >
              <p onClick={(e) => setType(index)}>{tab.title}</p>
            </div>
          ))}
        </div>

        <div>
          {listWeekChart &&
            listWeekChart?.slice(0,5).map((song, i) => (
              <SongItem
                key={i}
                i={i}
                song={song}
                activeSong={activeSong}
                isPlaying={isPlaying}
                data={listWeekChart}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
