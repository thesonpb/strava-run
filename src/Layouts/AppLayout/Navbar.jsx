import React, { useContext } from "react";
import DashboardIcon from "../../app/icons/DashboardIcon";
import TableIcon from "../../app/icons/TableIcon";
import HistoryIcon from "../../app/icons/HistoryIcon";
import GroupIcon from "../../app/icons/GroupIcon";
import LogoutIcon from "../../app/icons/LogoutIcon";
import { Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { logout } from "../../app/common/functions";
import { AppContext } from "../../app/context/AppContext";

function Navbar() {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const menuList = [
    { icon: <DashboardIcon />, label: "Dashboard", key: "/app/dashboard" },
    { icon: <TableIcon />, label: "Leader board", key: "/app/leaderboard" },
    { icon: <HistoryIcon />, label: "History", key: "/app/history" },
    { icon: <GroupIcon />, label: "Group", key: "/app/group" },
  ];
  return (
    <div className="fixed top-0 left-0 w-20 h-screen bg-black flex flex-col justify-between">
      <div>
        {/* Avatar */}
        <div className="mx-auto w-14 h-14 flex items-center justify-center mt-4 cursor-pointer">
          {user?.profile ? (
            <img
              className="rounded-full w-14 h-14"
              src={user?.profile}
              alt="avatar"
            />
          ) : (
            <div className="rounded-full w-14 h-14 bg-green" />
          )}
        </div>

        {/* Menu list */}
        <div className="mt-4 flex flex-col items-center w-full gap-y-4">
          {menuList?.map((item) => (
            <Tooltip placement="right" key={item.key} title={item.label}>
              <div
                onClick={() => navigate(item.key)}
                className="w-14 h-14 rounded-2xl cursor-pointer hover:bg-gray text-lighterGray hover:text-white flex items-center justify-center"
              >
                {item.icon}
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
      <div
        onClick={() => {
          logout();
          navigate("/login");
        }}
        className="mx-auto mb-4 w-14 h-14 rounded-full cursor-pointer bg-gray text-lightestGray flex items-center justify-center"
      >
        <LogoutIcon />
      </div>
    </div>
  );
}

export default Navbar;
