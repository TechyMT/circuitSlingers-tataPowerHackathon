import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6','Day 7'],
    datasets: [
      {
        label: 'Solar Consumption',
        data: [1100, 1900, 360, 530, 232, 3253, 4232],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,

        

      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} className='w-86' />
    </div>
  );
};

export default BarChart;
