import Cookie from "js-cookie";

export const logout = () => {
  Cookie.remove("access_token");
  Cookie.remove("refresh_token");
  localStorage.removeItem("user");
};
