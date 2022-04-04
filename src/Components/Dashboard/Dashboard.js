import React from "recharts";
import DashedLineChart from "../DashedLineChart/DashedLineChart";
import SimpleLineChart from "../SimpleLineChart/SimpleLineChart";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SimpleLineChart></SimpleLineChart>
      <DashedLineChart></DashedLineChart>
    </div>
  );
};

export default Dashboard;
