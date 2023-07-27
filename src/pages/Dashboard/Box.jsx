import React, { useState } from "react";
import RunIcon from "../../app/icons/RunIcon";
import DistanceIcon from "../../app/icons/DistanceIcon";
import SpeedIcon from "../../app/icons/SpeedIcon";
import { useQuery } from "react-query";
import Activity from "../../app/models/Activity";
import {
  formatDate,
  formatDistance,
  formatElevation,
  formatMovingTime,
  formatSpeed,
} from "../../app/common/functions";
import { Spin } from "antd";

function Box() {
  const [totalDistance, setTotalDistance] = useState(0);
  const [avgSpeed, setAvgSpeed] = useState(0);
  const [avgMovingTime, setAvgMovingTime] = useState(0);
  const [runCount, setRunCount] = useState(0);
  const { data, isFetching } = useQuery(
    ["getAthleteActivities"],
    async () => {
      const res = await Activity.getAthleteActivities();
      const distanceSum = res.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.distance;
      }, 0);
      const speedSum = res.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.average_speed;
      }, 0);
      const movingTimeSum = res.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.moving_time;
      }, 0);
      const countRun = res.filter((item) => item.sport_type === "Run")?.length;
      setTotalDistance(distanceSum);
      setAvgSpeed(speedSum / (res?.length || 1));
      setAvgMovingTime(movingTimeSum / (res?.length || 1));
      setRunCount(countRun);
      return res[0];
    },
    { initialData: {} }
  );
  const renderIndex = (label, value) => (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-0 text-white">{value}</h1>
      <div className="text-gray font-semibold">{label}</div>
    </div>
  );

  if (isFetching)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spin />
      </div>
    );

  return (
    <div className="grid grid-cols-5 grid-rows-4 gap-4 w-full">
      {/* Last run */}
      <div className="col-span-2 row-span-4 bg-blue rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <h2 className="my-0 text-white">Last activity</h2>
          <div className="rounded-full w-6 h-6 flex items-center justify-center p-2 bg-white text-blue">
            <RunIcon />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-4">
          {renderIndex("Sport", data?.sport_type)}
          {renderIndex("Date", formatDate(data?.start_date))}
          {renderIndex("Time", formatMovingTime(data?.moving_time))}
          {renderIndex("Distance", formatDistance(data?.distance))}
          {renderIndex("Max speed", formatSpeed(data?.max_speed))}
          {renderIndex(
            "Elevation",
            formatElevation(data?.elev_high, data?.elev_low)
          )}
        </div>
      </div>
      {/* Total distance */}
      <div className="col-span-2 row-span-2 col-start-3 bg-green rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <h2 className="my-0 text-white">Total distance</h2>
          <div className="rounded-full w-6 h-6 flex items-center justify-center p-2 bg-white text-green">
            <DistanceIcon />
          </div>
        </div>
        <h1 className="text-6xl my-4 text-white">
          {formatDistance(totalDistance)}
        </h1>
      </div>
      {/* Avg speed */}
      <div className="row-span-2 col-span-2 col-start-3 row-start-3 bg-violet rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <h2 className="my-0 text-white">Avg speed</h2>
          <div className="rounded-full w-6 h-6 flex items-center justify-center p-2 bg-white text-violet">
            <SpeedIcon />
          </div>
        </div>
        <h1 className="text-5xl mb-4 mt-16 text-white">
          {formatSpeed(avgSpeed * 1000)}
        </h1>
      </div>
      {/* Total calories */}
      <div className="row-span-2 col-start-5 bg-yellow rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <h2 className="my-0 text-white">Avg moving time</h2>
        </div>
        <h1 className="text-5xl my-4 text-white">
          {formatMovingTime(avgMovingTime)}
        </h1>
      </div>
      {/* Avg heart rate */}
      <div className="row-span-2 col-start-5 row-start-3 bg-pink rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <h2 className="my-0 text-white">Runs</h2>
        </div>
        <h1 className="text-5xl my-4 text-white">{runCount}</h1>
      </div>
    </div>
  );
}

export default Box;
