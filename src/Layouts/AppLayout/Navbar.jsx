import React from "react";
import DashboardIcon from "../../app/icons/DashboardIcon";
import TableIcon from "../../app/icons/TableIcon";
import HistoryIcon from "../../app/icons/HistoryIcon";
import GroupIcon from "../../app/icons/GroupIcon";
import LogoutIcon from "../../app/icons/LogoutIcon";

function Navbar() {
  const data = {
    imageSrc:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  };
  const { imageSrc } = data;

  const menuList = [
    { icon: <DashboardIcon />, label: "", key: "" },
    { icon: <TableIcon />, label: "", key: "" },
    { icon: <HistoryIcon />, label: "", key: "" },
    { icon: <GroupIcon />, label: "", key: "" },
  ];
  return (
    <div className="fixed top-0 left-0 w-20 h-screen bg-black flex flex-col justify-between">
      <div>
        {/* Avatar */}
        <div className="mx-auto w-14 h-14 flex items-center justify-center mt-4 cursor-pointer">
          {imageSrc ? (
            <img className="rounded-full w-14 h-14" src={imageSrc} />
          ) : (
            <div className="rounded-full w-14 h-14 bg-green" />
          )}
        </div>

        {/* Menu list */}
        <div className="mt-4 flex flex-col items-center w-full gap-y-4">
          {menuList?.map((item) => (
            <div className="w-14 h-14 rounded-2xl cursor-pointer hover:bg-gray text-lighterGray hover:text-white flex items-center justify-center">
              {item.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mb-4 w-14 h-14 rounded-full cursor-pointer bg-gray text-lightestGray flex items-center justify-center">
        <LogoutIcon />
      </div>
    </div>
  );
}

export default Navbar;
