import React from "react";
import Box from "./Box";
import GroupOverview from "./GroupOverview";
import RecentRuns from "./RecentRuns";

function Dashboard() {
  return (
    <div className="mx-auto max-w-6xl pt-4">
      <Box />
      <GroupOverview />
      <RecentRuns />
    </div>
  );
}

export default Dashboard;
