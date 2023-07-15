import httpCommon from "../common/http-common";
import axios from "axios";
import Cookie from "js-cookie";

let http = httpCommon;

class Base {
  getToken() {
    const token = Cookie.get("access_token");
    http = axios.create({
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
  }
  apiGet = (url, params) => {
    return http.get(url, { params }).then((res) => res.data);
  };
  apiPost = (url, body) => {
    return http.post(url, body).then((res) => res.data);
  };
  apiPut = (url, body) => {
    return http.put(url, body).then((res) => res.data);
  };
  apiDelete = (url) => {
    return http.delete(url).then((res) => res.data);
  };
}
export default Base;
