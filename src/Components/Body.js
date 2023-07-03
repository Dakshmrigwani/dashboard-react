import React from "react";
import {
  BsCurrencyRupee,
  BsFillPeopleFill,
  BsBarChartLine,
  BsShield,
} from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { FiBox, FiCreditCard, FiRefreshCcw } from "react-icons/fi";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  ArcElement,
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
const dataPie = {
  datasets: [
    {
      label: "Sales",
      data: [3, 6, 9],
      borderColor: "black",
      backgroundColor: ["red", "aqua", "purple"],
    },
  ],
};

const optionsPie = {};

const dataBar = {
  labels: ["Mon", "Tue", "Wed", "Thu"],
  responsive: true,
  datasets: [
    {
      label: ["budget", "expenses"],
      data: [3, 6, 9, 4],
      backgroundColor: ["aqua", "red", "blue", "green"],
      borderWidth: 1,
    },
  ],
};

const optionsBar = {
  plugins: {
    legend: {
      display: false, // Hide legend labels
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const optionsStacked = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
const dataStacked = {
  labels: ["Mon", "Tue", "Wed", "Thu"],
  datasets: [
    {
      label: "Dataset 1",
      data: [34, 55, 78, 23, 87],
      backgroundColor: "#4b5563",
    },
    {
      label: "Dataset 2",
      data: [45, 57, 34, 32, 24],
      backgroundColor: "#4ade80",
    },
  ],
};

const LineChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

const BarChart = () => {
  return (
    <>
      <Bar data={dataBar} options={optionsBar} />
    </>
  );
};

const PieChart = () => {
  return (
    <>
      <Pie data={dataPie} options={optionsPie} />
    </>
  );
};
const StackedBar = () => {
  return <Bar data={dataStacked} options={optionsStacked} />;
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            <div className="card border-0">
              <div className="card-body">
                <button
                  className="btn rounded-circle border-0"
                  type="button"
                  style={{
                    backgroundColor: "#e5fafb",
                    height: "4rem",
                    width: "4rem",
                  }}
                >
                  <BsFillPeopleFill style={{ color: "#03c9d7" }} />
                </button>
                <span className="d-flex justify-content-center">
                  <p className="card-text text-dark fs-4">39,354</p>
                  <p className="text-danger">-4%</p>
                </span>
                <p className="text-secondary">Customers</p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body">
                <button
                  className="btn rounded-circle border-0"
                  type="button"
                  style={{
                    backgroundColor: "#FEC90F",
                    height: "4rem",
                    width: "4rem",
                  }}
                >
                  <FiBox style={{ color: "white" }} />
                </button>
                <span className="d-flex justify-content-center">
                  <p className="card-text text-dark fs-4">4,354</p>
                  <p className="text-success">+23%</p>
                </span>
                <p className="text-secondary">Products</p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body">
                <button
                  className="btn rounded-circle border-0"
                  type="button"
                  style={{
                    backgroundColor: "#fff4e5",
                    height: "4rem",
                    width: "4rem",
                  }}
                >
                  <BsBarChartLine style={{ color: "red" }} />
                </button>
                <span className="d-flex justify-content-center">
                  <p className="card-text text-dark fs-4">4,864</p>
                  <p className="text-success">+41%</p>
                </span>
                <p className="text-secondary">Sales</p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body">
                <button
                  className="btn rounded-circle border-0"
                  type="button"
                  style={{
                    backgroundColor: "#ebfaf2",
                    height: "4rem",
                    width: "4rem",
                  }}
                >
                  <FiRefreshCcw style={{ color: "green" }} />
                </button>
                <span className="d-flex justify-content-center">
                  <p className="card-text text-dark fs-4">39,354</p>
                  <p className="text-danger">-12%</p>
                </span>
                <p className="text-secondary">Refunds</p>
              </div>
            </div>
          </div>

          <div className="card border-0">
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
                  <div className="vr h-100"></div>
                </div>
                <div className="col col-sm-12 col-lg-6">
                  <StackedBar />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center col">
              <div className="card" style={{ width: "30rem" }}>
                <div className="card-body  border-0 row">
                  <div className="col d-flex flex-column justify-content-center align-items-center">
                    <b>
                      <BsCurrencyRupee /> 45,334
                    </b>
                    <p className="text-secondary">Yearly Sales</p>
                  </div>
                  <div className="col">
                    <PieChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center col">
                <div
                  className="card"
                  style={{ width: "30rem", height: "20rem" }}
                >
                  <h4 className="card-title-title">Earnings</h4>
                  <div className="card-body  border-0 row">
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                      <b>
                        <BsCurrencyRupee /> 63,448.00
                      </b>
                      <p className="text-secondary">Yearly Sales</p>
                    </div>
                    <div className="col">
                      <BarChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <div
                className="card border-0"
                style={{ width: "30rem", height: "auto" }}
              >
                <div className="card-body ">
                  <div className="card-title row">
                    <h4 className="col-7 text-dark">Recent Transaction</h4>
                    <div className="col-5">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>March 2023</option>
                        <option value="1">April 2023</option>
                        <option value="2">May 2023</option>
                        <option value="3">June 2023</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-1 d-flex flex-column gap-3">
                      <div className="row">
                        <button
                          className="rounded-circle btn text-white "
                          type="button"
                          style={{
                            backgroundColor: "#1E4DB7",
                          }}
                        >
                          <BsCurrencyRupee />
                        </button>
                      </div>
                    </div>
                    <div className="col-7 text-start">
                      <div className="d-flex flex-column">
                        <b>Paypal Transfer</b>
                        <p className="text-secondary">Money Added</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <p className="text-success">+350</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-1 d-flex flex-column gap-3">
                      <div className="row">
                        <button
                          className="rounded-circle btn"
                          type="button"
                          style={{
                            backgroundColor: "#1E4DB7",
                          }}
                        >
                          <BsShield className="text-white" />
                        </button>
                      </div>
                    </div>
                    <div className="col-7 text-start">
                      <div className="d-flex flex-column">
                        <b>Wallet</b>
                        <p className="text-secondary">Bill Payment</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <p className="text-danger">-560</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-1 d-flex flex-column gap-3">
                      <div className="row">
                        <button
                          className="btn rounded-circle border-0"
                          type="button"
                          style={{
                            backgroundColor: "#FEC90F",
                          }}
                        >
                          <FiCreditCard style={{ color: "white" }} />
                        </button>
                      </div>
                    </div>
                    <div className="col-7 text-start">
                      <div className="d-flex flex-column">
                        <b>Credit Card</b>
                        <p className="text-secondary">Money Reversed</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <p className="text-success">+350</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-1 d-flex flex-column gap-3">
                      <div className="row">
                        <button
                          className="btn rounded-circle border-0"
                          type="button"
                          style={{
                            backgroundColor: "#fff4e5",
                          }}
                        >
                          <TiTickOutline style={{ color: "red" }} />
                        </button>
                      </div>
                    </div>
                    <div className="col-7 text-start">
                      <div className="d-flex flex-column">
                        <b>Bank Transfer</b>
                        <p className="text-secondary">Money Added</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <p className="text-success">+350</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-1 d-flex flex-column gap-3">
                      <div className="row">
                        <button
                          className="rounded-circle btn text-white "
                          type="button"
                          style={{
                            backgroundColor: "#1E4DB7",
                          }}
                        >
                          <BsCurrencyRupee />
                        </button>
                      </div>
                    </div>
                    <div className="col-7 text-start">
                      <div className="d-flex flex-column">
                        <b>Refund</b>
                        <p className="text-secondary">Payment sent</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <p className="text-danger">-50</p>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary w-100">
                    +36 transaction more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="card border-0" style={{ width: "30rem" }}>
              <div className="card-body">
                <div className="card-title row">
                  <h4 className="col-7 text-dark">Sales Overview</h4>
                  <div className="col-5">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>March 2023</option>
                      <option value="1">April 2023</option>
                      <option value="2">May 2023</option>
                      <option value="3">June 2023</option>
                    </select>
                  </div>
                </div>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
