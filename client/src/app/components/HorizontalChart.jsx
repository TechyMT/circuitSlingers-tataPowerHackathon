import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const progressBar = {
    id: "progressBar",
    beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const meta = chart.getDatasetMeta(0);
        const data = chart.data.datasets[0].data;
        const colors = chart.data.datasets[0].backgroundColor;
        const total = data.reduce((a, b) => a + b, 0);
        let current = 0;
        ctx.save();
        meta.data.forEach((element, index) => {
            const value = data[index];
            const color = colors[index];
            const start = current;
            const end = current + value;
            current = end;
            ctx.beginPath();
            ctx.moveTo(element.x, element.y);
            ctx.fillStyle = color;
            ctx.arc(element.x, element.y, element.width / 2, start * Math.PI * 2 / total - 0.5 * Math.PI, end * Math.PI * 2 / total - 0.5 * Math.PI);
            ctx.lineTo(element.x, element.y);
            ctx.fill();
        });
        ctx.restore();
    }
}

export const options = {
  indexAxis: "y",
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: false,
        beginAtZero: true,
      },
    },
    },
    plugins: [
      progressBar
  ]
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: 0, max: 50 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      borderWidth: 1,
      borderRadius: 5,
      barPercentage: 0.5,
      borderSkipped: false,
      categoryPercentage: 0.8,
    },
  ],
};

console.log(faker.number.int({ min: 0, max: 100 }));

export default function App() {
  return (
    <div>
      <div className="bg-black">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
