import React from "react";
import {
  BsCurrencyRupee,
  BsFillPeopleFill,
  BsBarChartLine,
} from "react-icons/bs";
import { FiBox, FiRefreshCcw } from "react-icons/fi";
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
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

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
    y: {
      display: false, // Hide Y axis labels
    },
    x: {
      display: false, // Hide X axis labels
    },
  },
};

const dataBar = {
  labels: ["Mon", "Tue", "Wed", "Thu"],
  datasets: [
    {
      label: "Sales Numbers",
      data: [3, 6, 9, 3.69],
      borderColor: "black",
      backgroundColor: ["aqua", "red", "blue", "green"],
      borderWidth: 1,
    },
  ],
};
const optionsBar = {
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

const BarChart = () => {
  <>
    <Bar data={dataBar} options={optionsBar} />
  </>;
};

export default function Body() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-column gap-2">
          <div className="card border-0" style={{ width: "20rem" }}>
            <div className="card-body">
              <h5 className="card-title text-secondary">Earnings</h5>
              <div className="row">
                <div className="col">
                  <p className="card-text">
                    <BsCurrencyRupee /> 63,778.00
                  </p>
                  <button
                    className="btn btn-primary p-2"
                    style={{ borderRadius: "8px" }}
                  >
                    Download
                  </button>
                </div>
                <div className="col">
                  <button
                    className="rounded-circle btn text-white"
                    type="button"
                    style={{ backgroundColor: "#1E4DB7", height: "43px" }}
                  >
                    <BsCurrencyRupee />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex gap-3 card-group row">
            <div className="card border-0 col col-sm-6 col-md-6 col-lg-3">
              <div className="card-body">
                <button
                  className="btn rounded-circle border-0"
                  type="button"
                  style={{
                    backgroundColor: "#e5fafb",
                    height: "4rem",
                    width: "5rem",
                  }}
                >
                  <BsFillPeopleFill style={{ color: "#03c9d7" }} />
                </button>
                <span className="d-flex justify-content-center">
                  <p className="card-text text-dark fs-4 ">39,354</p>
                  <p className="text-danger">-4%</p>
                </span>
                <p className="text-secondary">Customers</p>
              </div>
            </div>
            <div className="card border-0 col col-sm-6 col-md-6 col-lg-3">
              <div className="card-body">
                <button
                  className="btn rounded-circle border-0"
                  type="button"
                  style={{
                    backgroundColor: "#FEC90F",
                    height: "4rem",
                    width: "5rem",
                  }}
                >
                  <FiBox style={{ color: "white" }} />
                </button>
                <span className="d-flex justify-content-center">
                  <p className="card-text text-dark fs-4 ">4,354</p>
                  <p className="text-success">+23%</p>
                </span>
                <p className="text-secondary">Products</p>
              </div>
            </div>
            <div className="card border-0 col col-sm-6 col-md-6 col-lg-3">
              <div className="card-body">
                <button
                  className="btn rounded-circle border-0"
                  type="button"
                  style={{
                    backgroundColor: "#fff4e5",
                    height: "4rem",
                    width: "5rem",
                  }}
                >
                  <BsBarChartLine style={{ color: "red" }} />
                </button>
                <span className="d-flex justify-content-center">
                  <p className="card-text text-dark fs-4 ">4,864</p>
                  <p className="text-success">+41%</p>
                </span>
                <p className="text-secondary">Sales</p>
              </div>
            </div>
            <div className="card border-0 col col-sm-6 col-md-6 col-lg-3">
              <div className="card-body">
                <button
                  className="btn rounded-circle border-0"
                  type="button"
                  style={{
                    backgroundColor: "#ebfaf2",
                    height: "4rem",
                    width: "5rem",
                  }}
                >
                  <FiRefreshCcw style={{ color: "green" }} />
                </button>
                <span className="d-flex justify-content-center">
                  <p className="card-text text-dark fs-4 ">39,354</p>
                  <p className="text-danger">-12%</p>
                </span>
                <p className="text-secondary">Refunds</p>
              </div>
            </div>
          </div>
          <div className="card border-0" style={{ width: "60rem" }}>
            <div className="card-body">
              <div className="card-title row">
                <div className="col text-start">
                  <h4>Revenue Updates</h4>
                </div>
                <div className="col ">
                  <ul className="d-flex justify-content-end gap-5">
                    <li className="" style={{ color: "#4b5563" }}>
                      Expenses
                    </li>
                    <li className="" style={{ color: "#4ade80" }}>
                      Budget
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col col-sm-11 col-lg-5">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex justify-content-center">
                    <LineChart />
                  </div>
                </div>
                <div className="col col-sm-1 col-lg-1">
                  <div className="vr"></div>
                </div>
                <div className="col col-sm-12 col-lg-6">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
