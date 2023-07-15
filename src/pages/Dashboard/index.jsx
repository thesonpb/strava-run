import React from "react";
import Box from "./Box";
import GroupOverview from "./GroupOverview";

function Dashboard() {
  return (
    <div className="main-content flex justify-center items-center">
      <div className="max-w-6xl">
        <Box />
        <GroupOverview />
      </div>
    </div>
  );
}

export default Dashboard;
