import React from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  return (
    <div className="">
     
      <div className="search-bar px-6 py-5 h-[180px] relative">

      <div className="absolute top-3 left-12 right-12 z-20 flex justify-between items-center nimate-slideup bg-gradient-to-br from-white/10 to-[#196eed] backdrop-blur-lg rounded-md text-slate-100">
          <form action="" className="py-2 px-5 flex items-center w-2/3">
            <label htmlFor="searchInput">
              <i className="ri-search-2-line text-xl pr-2"></i>
            </label>
            <input
              type="text"
              id="searchInput"
              className="py-2 px-5 bg-transparent text-inherit placeholder:text-slate-100 placeholder:italic w-full focus:outline-none"
              placeholder="Search..."
            />
          </form>
          <div className="flex px-3 text-sm">
            <Link to="/login">
            <button className="bg-gray-600 py-2 px-3 mr-3 rounded-lg hover:bg-sky-900 shadow-md">Đăng nhập</button>
            </Link>
            <Link  to="/register">
            <button className="bg-gray-600 py-2 px-3 mr-3 rounded-lg hover:bg-sky-900 shadow-md">Đăng ký</button>
            </Link>
          </div>
          <div className="flex items-center px-3 relative hidden">
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img
                src="https://www.kri8thm.in/html/listen/theme/demo/images/users/thumb.jpg"
                alt=""
              />
            </div>
            <span className="px-2 text-sm font-medium">Androws</span>
            <div className="absolute top-8 right-0 z-50 bg-slate-300">
             
            </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default SearchBar;
