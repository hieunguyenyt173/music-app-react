import React from "react";

function EventCard() {
  return (
    <div className="event-card max-w-[306px]">
      <div className="rounded-xl overflow-hidden">
        <img
          src="https://www.kri8thm.in/html/listen/theme/demo/images/background/horizontal/1.jpg"
          alt=""
        />
      </div>
      <div className="content px-3 py-2">
        <div className="flex items-center">
          <i className="ri-map-pin-fill fs-6 text-gray-400"></i>
          <p className="text-[13px] font-medium text-gray-400 px-2">258 Goff Avenue, MI - USA</p>
        </div>
        <div>
          <div className="flex items-center space-x-2 text-base">
            <h4 className="font-semibold text-slate-900">
              New year 1st night with BendiQ Band
            </h4>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mt-3 flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="mt-3 text-sm font-medium ml-1">
                <a href="#" className="text-blue-500 text-xs font-medium">
                  198 +
                </a>
              </div>
            </div>
            <div className="">
              <a
                href=""
                className=" text-[13px] font-medium text-blue-500 bg-blue-100 px-2 py-1 rounded-sm hover:bg-blue-600 hover:text-white"
              >
                Join Event
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
