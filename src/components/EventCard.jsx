import React, { useState } from "react";

function EventCard({event}) {
  const [follow, setFollow] = useState(false)
  const handleFollow = () => {
    if(!follow) {
      alert("Đã quan tâm")
    }
    
    setFollow((prev) => !prev)
  }
  return (
    <div className="event-card group">
      <div className="rounded-xl overflow-hidden h-48 w-full">
        <img
        className="w-full h-full object-cover group-hover:scale-105 duration-200"
          src={event.image}
          alt=""
        />
      </div>
      <div className="content px-3 py-2">
        <div className="">
          <p className="text-[13px] font-medium text-gray-400">{event.type}</p>
        </div>
        <div>
          <div className="flex items-center space-x-2 text-base">
            <h4 className="font-semibold text-slate-900 py-2">
            {event.title}
            </h4>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center mt-2">
              <div className=" flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="mt-3 text-sm font-medium ml-1">
                <a href="#" className="text-blue-500 text-xs font-medium">
                  {`${event.follower}+ `}
                </a>
              </div>
            </div>
            <div className="">
              <button
                
                className= {`text-[13px] font-medium text-blue-500 bg-blue-100 px-2 py-1 rounded-sm hover:bg-blue-600 hover:text-white`}
                onClick={handleFollow}
              >
                {follow ? "Đã quan tâm" : "Quan tâm"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
