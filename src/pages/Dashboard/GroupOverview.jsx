import React from "react";
import RightArrow from "../../app/icons/RightArrow";
import GroupOverviewIcon from "../../app/icons/GroupOverviewIcon";
import PeopleIcon from "../../app/icons/PeopleIcon";
import DistanceBigIcon from "../../app/icons/DistanceBigIcon";
import FireBigIcon from "../../app/icons/FireBigIcon";
import SpeedBigIcon from "../../app/icons/SpeedBigIcon";

function GroupOverview() {
  const renderGroupItem = (label, value, icon) => (
    <div className="bg-lighterGray rounded-2xl w-60 py-6 flex items-center justify-center gap-x-6">
      {icon}
      <div>
        <h1 className="my-0">{value}</h1>
        <div className="font-semibold">{label}</div>
      </div>
    </div>
  );
  return (
    <div className="bg-gray rounded-2xl w-full mt-4 py-4">
      <div className="mx-4">
        <div className="flex justify-between items-center">
          <h2 className="cursor-pointer my-0 text-white flex items-center">
            Group overview <RightArrow />
          </h2>
          <div className="rounded-full w-6 h-6 flex items-center justify-center p-2 bg-white text-gray">
            <GroupOverviewIcon />
          </div>
        </div>
        <div className="flex items-center justify-around my-4">
          {renderGroupItem("Members", 10, <PeopleIcon />)}
          {renderGroupItem("Km run", 1000, <DistanceBigIcon />)}
          {renderGroupItem("Calories burned", 10, <FireBigIcon />)}
          {renderGroupItem("Avg speed", 10, <SpeedBigIcon />)}
        </div>
      </div>
    </div>
  );
}

export default GroupOverview;
