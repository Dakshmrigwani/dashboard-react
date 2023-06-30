import React from "react";
import {
  BsCurrencyRupee,
  BsFillPeopleFill,
  BsBarChartLine,
} from "react-icons/bs";
import { FiBox, FiRefreshCcw } from "react-icons/fi";

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
          <div className="d-flex gap-3 card-group ">
            <div className="card border-0">
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
            <div className="card border-0">
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
            <div className="card border-0">
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
            <div className="card border-0">
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
          <div className="card border-0" style={{ width: "40rem" }}>
            <div className="card-body">
              <div className="card-title row">
                <div className="col text-start">
                  <h4>Revenue Updates</h4>
                </div>
                <div className="col ">
                  <ul className="d-flex justify-content-end gap-5">
                    <li className="">Expenses</li>
                    <li className="" style={{ color: "#4ade80" }}>
                      Budget
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="col-1">
                  <div className="vr"></div>
                </div>
                <div className="col-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
