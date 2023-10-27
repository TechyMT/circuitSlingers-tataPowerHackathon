import React from "react";
import App from "./HorizontalChart";
import Card from "./Card";
import { faPiggyBank, faStar } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div>
      <div className="flex p-8 gap-8 justify-evenly">
        <Card name="Total Savings" value="$ 1,000" icon={faPiggyBank} />
        <Card name="Performance" value="100%" icon={faStar} />
        <Card name="Total Savings" value="$ 1,000" />
        <Card name="Total Savings" value="$ 1,000" />
      </div>
      <App />
    </div>
  );
};

export default Dashboard;
