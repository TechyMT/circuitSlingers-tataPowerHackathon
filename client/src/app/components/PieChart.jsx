import { PieChart } from "react-minimal-pie-chart";

import React from "react";

const PieChart = () => {
  return (
    <div>
      <PieChart
        data={[
          { title: "One", value: 10, color: "#E38627" },
          { title: "Two", value: 15, color: "#C13C37" },
          { title: "Three", value: 20, color: "#6A2135" },
        ]}
       radius = {(30)}
      />
    </div>
  );
};

export default PieChart;
