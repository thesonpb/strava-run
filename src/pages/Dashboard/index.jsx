import React from "react";
import Box from "./Box";

function Dashboard() {
  return (
    <div className="main-content flex justify-center items-center">
      <div className="max-w-6xl">
        <Box />
        {/*<iframe*/}
        {/*  allowTransparency*/}
        {/*  frameBorder="0"*/}
        {/*  height="160"*/}
        {/*  scrolling="no"*/}
        {/*  src="https://www.strava.com/clubs/1157244/latest-rides/9e5fd4bdd2882b82c7447770684f731e898f2fed?show_rides=false"*/}
        {/*  width="300"*/}
        {/*></iframe>*/}
      </div>
    </div>
  );
}

export default Dashboard;
