import React from "react";
import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Sidebar />
      <div className="ml-[280px]">
        <div className="">
          <SearchBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
