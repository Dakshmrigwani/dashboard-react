import React from "react";
import Navbar from "../Components/Navbar";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,

  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function LineChart() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [2, 6, 8, 5, 10],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
    options: {
      maintainAspectRatio: false,
    },
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const LineChart = () => (
    <>
      <Line data={data} options={options} />
    </>
  );
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card" style={{ width: "40rem" }}>
          <div className="card-body">
            <h5 className="card-title">Line Chart</h5>
            <LineChart />
          </div>
        </div>
      </div>
    </>
  );
}
