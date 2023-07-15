import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Spin } from "antd";
import axios from "axios";
import Cookie from "js-cookie";
import Base from "../app/models/Base";
import { AppContext } from "../app/context/AppContext";

function CallbackPage() {
  const { setUser } = useContext(AppContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");

  const tokenUrl = "https://www.strava.com/oauth/token";

  const client_id = import.meta.env.VITE_CLIENT_ID;
  const client_secret = import.meta.env.VITE_CLIENT_SECRET;
  const redirect_uri = import.meta.env.VITE_REDIRECT_URI;

  const [isLoading, setIsLoading] = useState(true);

  const getAccessToken = async () => {
    try {
      const response = await axios.post(tokenUrl, {
        client_id,
        client_secret,
        code,
        grant_type: "authorization_code",
        redirect_uri,
      });
      Cookie.set("access_token", response.data.access_token, {
        expires: 1 / 4,
        sameSite: "Lax",
      });
      Cookie.set("refresh_token", response.data.refresh_token, {
        expires: 1 / 4,
        sameSite: "Lax",
      });
      localStorage.setItem("user", JSON.stringify(response.data.athlete));
      setUser(response.data.athlete);
      setIsLoading(false);
    } catch (error) {
      console.error("Error exchanging code for token:", error);
      throw error;
    }
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  if (isLoading) {
    return <Spin spinning />;
  }

  const access_token = Cookie.get("access_token");
  if (access_token) {
    const base = new Base();
    base.getToken();
    return <Navigate to="/app/dashboard" />;
  }

  return null;
}

export default CallbackPage;
