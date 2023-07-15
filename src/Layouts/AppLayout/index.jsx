import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Cookie from "js-cookie";

function AppLayout() {
  const access_token = Cookie.get("access_token");
  if (!access_token) return <Navigate to="/login" />;
  return (
    <div className="flex">
      <Navbar />
      <div className="pl-20 main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
