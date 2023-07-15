import React from "react";
import { Button } from "antd";
import Cookie from "js-cookie";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const access_token = Cookie.get("access_token");
  if (access_token) return <Navigate to="/app/dashboard" />;
  const handleLogin = async () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_REDIRECT_URI;

    const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=activity:read_all`;

    window.location.href = authUrl;
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Button
        type="primary"
        size="large"
        className="w-56 font-bold"
        onClick={handleLogin}
      >
        Login to Strava
      </Button>
    </div>
  );
}

export default LoginPage;
