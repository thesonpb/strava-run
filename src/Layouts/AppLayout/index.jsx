import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Cookie from "js-cookie";
import { AppContext } from "../../app/context/AppContext";
import { Spin } from "antd";

function AppLayout() {
  const { setUser } = useContext(AppContext);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  useEffect(() => {
    const token = Cookie.get("access_token");
    const loggedInUser = localStorage.getItem("user");
    if (token && loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } else {
      Cookie.remove("access_token");
      localStorage.removeItem("user");
    }
    setIsLoadingUser(false);
  }, []);

  if (isLoadingUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

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
