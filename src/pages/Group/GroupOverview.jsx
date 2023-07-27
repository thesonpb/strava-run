import React, { useState } from "react";
import clsx from "clsx";
import GroupOverviewIcon from "../../app/icons/GroupOverviewIcon";
import PeopleIcon from "../../app/icons/PeopleIcon";
import DistanceBigIcon from "../../app/icons/DistanceBigIcon";
import SpeedBigIcon from "../../app/icons/SpeedBigIcon";
import RunBigIcon from "../../app/icons/RunBigIcon";
import RunIcon from "../../app/icons/RunIcon";
import MemberIcon from "../../app/icons/MemberIcon";
import { useQuery } from "react-query";
import Club from "../../app/models/Club";
import { Table, Tag } from "antd";
import {
  formatDistance,
  formatDistanceWithUnit,
  formatMovingTime,
} from "../../app/common/functions";

function GroupOverview() {
  const clubId = import.meta.env.VITE_CLUB_ID;
  const [numRun, setNumRun] = useState(0);
  const [totalDistance, setTotalDistance] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [currentTab, setCurrentTab] = useState("member");

  const { data: dataMember } = useQuery(
    ["getClubMembers"],
    async () => {
      const res = await Club.getClubMember(clubId);
      return res;
    },
    {
      initialData: [],
    }
  );
  const { data: dataActivity } = useQuery(
    ["getClubActivity"],
    async () => {
      const res = await Club.getClubActivity(clubId);
      setNumRun(res?.filter((item) => item.sport_type === "Run")?.length);
      const distance = res?.reduce((a, b) => {
        return a + b.distance;
      }, 0);
      const time = res?.reduce((a, b) => {
        return a + b.moving_time;
      }, 0);
      setTotalDistance(distance);
      setTotalTime(time);

      return res;
    },
    {
      initialData: [],
    }
  );

  const renderGroupItem = (label, value, icon) => (
    <div className="bg-lighterGray rounded-2xl w-32 md:w-40 lg:w-48 h-16 py-6 flex items-center justify-center gap-x-2 md:gap-x-6">
      {icon}
      <div>
        <h1 className="my-0 text-xl md:text-2xl lg:text-3xl">{value}</h1>
        <div className="font-semibold text-base md:text-lg lg:text-xl">
          {label}
        </div>
      </div>
    </div>
  );

  const renderMember = (data) => {
    const columns = [
      {
        title: "No",
        dataIndex: "index",
        key: "index",
        render: (text, record, index) => index + 1,
        width: 80,
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (value, record) => (
          <div>
            {record.firstname} {record.lastname}
          </div>
        ),
      },
      {
        title: "Role",
        dataIndex: "membership",
        key: "membership",
        render: (value) => <Tag>{value}</Tag>,
      },
    ];
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  };
  const renderActivity = (data) => {
    const columns = [
      {
        title: "No",
        dataIndex: "index",
        key: "index",
        render: (text, record, index) => index + 1,
        width: 80,
      },
      {
        title: "Athlete",
        dataIndex: "athlete",
        key: "athlete",
        render: (value) => (
          <div>
            {value.firstname} {value.lastname}
          </div>
        ),
      },
      {
        title: "Sport",
        dataIndex: "sport_type",
        key: "sport_type",
      },
      {
        title: "Distance",
        dataIndex: "distance",
        key: "distance",
        render: (value) => <div>{formatDistance(value)}</div>,
      },
      {
        title: "Moving time",
        dataIndex: "moving_time",
        key: "moving_time",
        render: (value) => <div>{formatMovingTime(value)}</div>,
      },
    ];
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  };

  return (
    <div className="bg-gray rounded-2xl w-full mt-4 py-4">
      <div className="mx-4">
        <div className="flex justify-between items-center">
          <h2 className="cursor-pointer my-0 text-white flex items-center">
            Group overview
          </h2>
          <div className="rounded-full w-6 h-6 flex items-center justify-center p-2 bg-white text-gray">
            <GroupOverviewIcon />
          </div>
        </div>
        <div className="flex items-center justify-around my-4 gap-x-4 lg:gap-x-6">
          {renderGroupItem("Members", dataMember?.length, <PeopleIcon />)}
          {renderGroupItem("Runs", numRun, <RunBigIcon />)}
          {renderGroupItem(
            formatDistanceWithUnit(totalDistance).unit,
            formatDistanceWithUnit(totalDistance).distance,
            <DistanceBigIcon />
          )}
          {renderGroupItem(
            "Hours",
            (totalTime / 3600).toFixed(2),
            <SpeedBigIcon />
          )}
        </div>
        <div>
          <div className="flex gap-x-2">
            <span
              className={clsx(
                "cursor-pointer px-4 py-2 rounded-2xl text-sm font-semibold flex items-center justify-center gap-x-2",
                currentTab === "member"
                  ? "bg-lighterGray text-gray"
                  : "text-white hover:bg-lighterGray hover:text-gray"
              )}
              onClick={() => setCurrentTab("member")}
            >
              <MemberIcon />
              Members
            </span>
            <span
              className={clsx(
                "cursor-pointer px-4 py-2 rounded-2xl text-sm font-semibold flex items-center justify-center gap-x-2",
                currentTab === "activity"
                  ? "bg-lighterGray text-gray"
                  : "text-white hover:bg-lighterGray hover:text-gray"
              )}
              onClick={() => setCurrentTab("activity")}
            >
              <RunIcon />
              Activities
            </span>
          </div>
          <div className="pt-4">
            {currentTab === "member"
              ? renderMember(dataMember)
              : renderActivity(dataActivity)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupOverview;
