import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'

const LineChart = () => {
  // Sample data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May','June','July','August','September','October','November','December'],
    datasets: [
      {
        label: 'Energy Consumption',
        data: [65, 59, 80, 81, 56, 89, 90,100,80,56,60,30],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',

        
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
