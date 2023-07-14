import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Spin } from "antd";
import axios from "axios";
import Cookie from "js-cookie";

function CallbackPage() {
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const state = searchParams.get("state");
  const code = searchParams.get("code");
  const scope = searchParams.get("scope");

  const tokenUrl = "https://www.strava.com/oauth/token";

  const client_id = import.meta.env.VITE_CLIENT_ID;
  const client_secret = import.meta.env.VITE_CLIENT_SECRET;
  const redirect_uri = import.meta.env.VITE_REDIRECT_URI;
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
      navigate("/app/dashboard");
    } catch (error) {
      console.error("Error exchanging code for token:", error);
      throw error;
    }
  };

  useEffect(() => {
    getAccessToken();
  }, []);
  return <Spin spinning />;
}

export default CallbackPage;
