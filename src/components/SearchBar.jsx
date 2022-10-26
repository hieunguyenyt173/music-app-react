import React from "react";

function SearchBar() {
  return (
    <div className="">
     
      <div className="search-bar px-6 py-5 h-[320px] relative">

      <div className="absolute top-3 left-5 right-5 z-20 flex justify-between items-center bg-[#196eed] rounded-md text-slate-100">
          <form action="" className="py-2 px-5 flex items-center w-full">
            <label htmlFor="searchInput">
              <i className="ri-search-2-line text-xl pr-2"></i>
            </label>
            <input
              type="text"
              id="searchInput"
              className="py-2 px-5 bg-transparent text-inherit placeholder:text-slate-100 placeholder:italic w-full"
              placeholder="Search..."
            />
          </form>
          <div className="flex items-center px-3">
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img
                src="https://www.kri8thm.in/html/listen/theme/demo/images/users/thumb.jpg"
                alt=""
              />
            </div>
            <span className="px-2 text-sm font-medium">Androws</span>
          </div>
      </div>
      </div>
    </div>
  );
}

export default SearchBar;
