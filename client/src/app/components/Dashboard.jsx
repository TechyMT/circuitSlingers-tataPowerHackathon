import React from "react";
import App from "./HorizontalChart";
import Card from "./Card";
import { faPiggyBank, faStar } from "@fortawesome/free-solid-svg-icons";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import BarChartJson from "./BarChartJson"
const Dashboard = () => {
  return (
    <div>
      <div className="flex p-8 gap-8 justify-evenly">
        <Card name="Total Savings" value="$ 1,000" icon={faPiggyBank} />
        <Card name="Performance" value="100%" icon={faStar} />
        <Card name="Annual Potential" value="$ 1,000" />
        <Card name="Annual Loss" value="$ 1,000" />
      </div>
      <div className="grid grid-col-2">
        <div className="h1 text-xl p-8">Solar Energy Consumption</div>
        <div className="flex gap-12 justify-center">
          <BarChart />
          <LineChart/>
        </div>
        <div className=" text-xl p-12">
          <BarChartJson/>
        </div>
        </div>
      </div>
  );
};

export default Dashboard;
