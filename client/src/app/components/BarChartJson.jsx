import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('client\data.json') 
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: 'Value',
        data: data.map((item) => item.value),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'YYYY-MM-DD',
          },
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Energy Useage</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <Bar data={chartData} options={options} />
      )}
    </div>
  );
};

export default BarChart;
