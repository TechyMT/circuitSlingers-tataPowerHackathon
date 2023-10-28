import React from "react";
import App from "./HorizontalChart";
import Card from "./Card";
import { faPiggyBank, faStar } from "@fortawesome/free-solid-svg-icons";
import ChartCard from "./ChartCard";
import BarChart from './BarChart';
const Dashboard = () => {
  return (
    <div>
      <div className="flex p-8 gap-8 justify-evenly">
        <Card name="Total Savings" value="$ 1,000" icon={faPiggyBank} />
        <Card name="Performance" value="100%" icon={faStar} />
        <Card name="Total Savings" value="$ 1,000" />
        <Card name="Total Savings" value="$ 1,000" />
      </div>
      {/* <App /> */}
      <div className="flex gap-8 p-4 justify-center">
        {/* <ChartCard />
        <ChartCard />
        <ChartCard />
        <ChartCard /> */}
        <BarChart/>
      </div>
    </div>
  );
};

export default Dashboard;
