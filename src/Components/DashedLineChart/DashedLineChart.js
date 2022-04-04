import React from "react";
import useChartData from "../../hooks/useChartData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DashedLineChart = () => {
  const [chart] = useChartData([]);
  const { month, sell, investment } = chart;
  return (
    <div>
      <LineChart
        layout="vertical"
        width={500}
        height={300}
        data={chart}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="month" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Line dataKey="sell" stroke="#8884d8" />
        <Line dataKey="investment" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default DashedLineChart;
