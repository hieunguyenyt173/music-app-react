import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/features/authSlice";
function SearchBar() {
  const [isShow, setIsShow] = useState(false);
  const {user} = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState("")
  const key = keyword.replaceAll(" ", "%20")
  const handleSearch = () => {
    if(key){
      navigate(`/tim-kiem/${key}`)
    }
    
  }
  const handleLogout = () => {
    dispatch(logout());
    navigate("/")
  };
  
  return (
    <div className="">
      <div className="search-bar px-6 py-5 h-[180px] relative">
        <div className="absolute z-30 top-3 left-12 right-12 z-20 flex justify-between items-center nimate-slideup bg-gradient-to-br from-white/10 to-[#196eed] backdrop-blur-lg rounded-md text-slate-100">
          <form action="" className="py-2 px-5 flex items-center w-2/3">
            <label htmlFor="searchInput">
              <i className="ri-search-2-line text-xl pr-2" onClick={handleSearch}></i>
            </label>
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              type="text"
              id="searchInput"
              className="py-2 px-5 bg-transparent text-inherit placeholder:text-slate-100 placeholder:italic w-full focus:outline-none"
              placeholder="Search..."
            />
          </form>
          {user.id ? (
            <div className="flex items-center px-3 relative">
              <span className="px-2 text-sm font-medium">
                {user?.userName}
              </span>
              <div className="w-7 h-7 rounded-full overflow-hidden">
                <img
                  src={user?.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwWMJbZoZ26ZyYB8M-1e7OLBVUWXRLNSO6A&usqp=CAU"}
                  alt=""
                />
              </div>
              <div className="ml-2 relative inline-block">
                <button
                  className="relative block text-state-100 bg-transparent border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
                  onClick={(e) => setIsShow((prev) => !prev)}
                >
                  <svg
                    className="w-4 h-4 text-state-100 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isShow && (
                  <div className="absolute right-0 z-40 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                    <Link
                      to={`/users/${user?.id}`}
                      className="block px-4 py-3 text-sm  text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {" "}
                      Thông tin{" "}
                    </Link>
                    <Link
                      to="/user/doi-mat-khau"
                      className="block px-4 py-3 text-sm  text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {" "}
                      Đổi mật khẩu{" "}
                    </Link>

                    <p
                      className="block px-4 py-3 text-sm  text-gray-600 capitalize transition-colors duration-300 transform cursor-pointer dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      onClick={handleLogout}
                    >
                      {" "}
                      Đăng xuất{" "}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )
        :
        (
          <div className="flex px-3 text-sm">
            <Link to="/login">
              <button className="bg-gray-600 py-2 px-3 mr-3 rounded-lg hover:bg-sky-900 shadow-md">
                Đăng nhập
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-gray-600 py-2 px-3 mr-3 rounded-lg hover:bg-sky-900 shadow-md">
                Đăng ký
              </button>
            </Link>
          </div>
        ) 
        }
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
