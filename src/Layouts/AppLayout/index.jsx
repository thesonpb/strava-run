import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="flex">
      <Navbar />
      <div className="ml-20 main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
