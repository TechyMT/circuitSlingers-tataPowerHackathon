import React from "react";
import App from "./HorizontalChart";
import Card from "./Card";
import {
  faPiggyBank,
  faStar,
  faHandHoldingDollar,
  faBattery,
} from "@fortawesome/free-solid-svg-icons";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import BarChartJson from "./BarChartJson";
import { PieChart } from "react-minimal-pie-chart";
const Dashboard = () => {
  return (
    <div>
      <div className="flex p-8 gap-8 justify-evenly">
        <Card
          name="Total Saved with Solar"
          value="$ 1,000"
          icon={faPiggyBank}
        />
        <Card name="Performance of your Panel" value="100%" icon={faStar} />
        <Card name="Annual Savings" value="$560" icon={faHandHoldingDollar} />
        <Card name="Battery (%)" value="50%" icon={faBattery} />
      </div>
      <div className="grid grid-col-2">
        <div className="h1 text-xl p-8 text-purple-900 font-bold">
          Solar Energy Consumption
        </div>
        <div className="flex p-8 gap-12 justify-center ">
          <div>
            <BarChart />
          </div>
          <div>
            <LineChart />
          </div>
        </div>
          
      
      </div>
    </div>
  );
};

export default Dashboard;
