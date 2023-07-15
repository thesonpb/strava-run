import axios from "axios";
import Cookie from "js-cookie";

const token = Cookie.get("access_token");

export default axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: token
    ? {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    : {
        "Content-type": "application/json",
      },
});
