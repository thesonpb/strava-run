import React from "react";
import RunIcon from "../../app/icons/RunIcon";
import DistanceIcon from "../../app/icons/DistanceIcon";
import SpeedIcon from "../../app/icons/SpeedIcon";
import BurnIcon from "../../app/icons/BurnIcon";
import HeartIcon from "../../app/icons/HeartIcon";

function Box() {
  const renderIndex = (label, value) => (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-0 text-white">{value}</h1>
      <div className="text-gray font-semibold">{label}</div>
    </div>
  );
  return (
    <div className="grid grid-cols-5 grid-rows-4 gap-4 w-full">
      {/* Last run */}
      <div className="col-span-2 row-span-4 bg-blue rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <h2 className="my-0 text-white">Last run</h2>
          <div className="rounded-full w-6 h-6 flex items-center justify-center p-2 bg-white text-blue">
            <RunIcon />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-4">
          {renderIndex("Distance", 10.08)}
          {renderIndex("Distance", 10.08)}
          {renderIndex("Distance", 10.08)}
          {renderIndex("Distance", 10.08)}
          {renderIndex("Distance", 10.08)}
          {renderIndex("Distance", 10.08)}
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
        <h1 className="text-6xl my-4 text-white">100km</h1>
      </div>
      {/* Avg speed */}
      <div className="row-span-4 col-start-5 bg-violet rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <h2 className="my-0 text-white">Avg speed</h2>
          <div className="rounded-full w-6 h-6 flex items-center justify-center p-2 bg-white text-violet">
            <SpeedIcon />
          </div>
        </div>
        <h1 className="text-5xl mb-4 mt-16 text-white">10km/h</h1>
      </div>
      {/* Total calories */}
      <div className="row-span-2 col-start-3 row-start-3 bg-yellow rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <h2 className="my-0 text-white">Total calories</h2>
          <div className="rounded-full w-6 h-6 flex items-center justify-center p-2 bg-white text-yellow">
            <BurnIcon />
          </div>
        </div>
        <h1 className="my-4 text-white">1000</h1>
      </div>
      {/* Avg heart rate */}
      <div className="row-span-2 col-start-4 row-start-3 bg-pink rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <h2 className="my-0 text-white">Avg heart rate</h2>
          <div className="rounded-full w-6 h-6 flex items-center justify-center p-2 bg-white text-pink">
            <HeartIcon />
          </div>
        </div>
        <h1 className="my-4 text-white">80bpm</h1>
      </div>
    </div>
  );
}

export default Box;