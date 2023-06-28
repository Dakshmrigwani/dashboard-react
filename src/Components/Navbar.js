import React, { useEffect } from "react";
import { SiShopware } from "react-icons/si";
import avatar from "../data/avatar.jpg";
import avatar2 from "../data/avatar2.jpg";
import avatar3 from "../data/avatar3.png";
import avatar4 from "../data/avatar4.jpg";
import Product4 from "../data/product4.jpg";
import Product5 from "../data/product5.jpg";
import Product6 from "../data/product6.jpg";
import Product7 from "../data/product7.jpg";

import { BiShoppingBag, BiPyramid, BiMessageRounded } from "react-icons/bi";
import { MdOutlineCandlestickChart, MdStackedLineChart } from "react-icons/md";
import {
  BsCart3,
  BsPeople,
  BsCalendarEvent,
  BsKanban,
  BsFillBarChartFill,
  BsBarChartLine,
  BsCurrencyDollar,
  BsCurrencyRupee,
} from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";
import { VscEditorLayout } from "react-icons/vsc";
import { TbColorPicker } from "react-icons/tb";
import {
  AiOutlineLineChart,
  AiOutlineAreaChart,
  AiFillPieChart,
  AiOutlineMenu,
  AiOutlineBell,
} from "react-icons/ai";

export default function Navbar() {
  useEffect(() => {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          style={{ width: "21rem" }}
          data-bs-scroll="true"
          data-bs-backdrop="false"
        >
          <div className="offcanvas-header">
            <div className="row">
              <div className="col">
                <SiShopware />
              </div>
              <div className="col text-start w-100">
                <h5 className="offcanvas-title " id="offcanvasDarkLabel">
                  Dashbordo
                </h5>
              </div>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="text-secondary text-start">
              <h5>DASHBOARD</h5>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <BiShoppingBag />
              <p>Ecommerce</p>
            </div>
            <div className="text-secondary text-start">
              <h5>Pages</h5>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <BsCart3 />
              <p>Orders</p>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <BsPeople />
              <p>Employees</p>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <FcBusinessman />
              <p>Customer</p>
            </div>
            <div className="text-secondary text-start">
              <h5>APPS</h5>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <BsCalendarEvent />
              <p>Calendar</p>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <BsKanban />
              <p>Kanban</p>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <VscEditorLayout />
              <p>Editor</p>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <TbColorPicker />
              <p>Color picker</p>
            </div>
            <div className="text-secondary text-start">
              <h5>Charts</h5>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <AiOutlineLineChart />
              <p>Line</p>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <AiOutlineAreaChart />
              <p>Area</p>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <BsFillBarChartFill />
              <p>Bar</p>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <AiFillPieChart />
              <p>Pie</p>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <MdOutlineCandlestickChart />
              <p>Financial</p>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <BsBarChartLine />
              <p>Color Mapping</p>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <BiPyramid />
              <p>Pyramid</p>
            </div>
            <div className="d-flex gap-3 my-1 p-1 ps-3 pt-2 button-offcanvas">
              <MdStackedLineChart />
              <p>Stacked</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <a
            className=""
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <AiOutlineMenu className="" size={20} />
          </a>
          <div className="d-flex gap-3">
            <div
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <div
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Cart"
                style={{ height: "30px" }}
              >
                <BsCart3 size={20} />
              </div>
            </div>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                  Shopping Cart
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={Product4}
                        alt=""
                        className=""
                        style={{ width: "110px", borderRadius: "10px" }}
                      />
                    </div>
                    <div className="col-8">
                      <div className="d-flex flex-column w-100 text-start">
                        <b className="">Nike Shoe</b>
                        <p className="text-secondary">Milk Product</p>
                        <span className="" style={{ margintop: "-10px" }}>
                          <p className="text-decoration-line-through d-inline">
                            <BsCurrencyRupee className="mb-1" /> 500
                          </p>

                          <p className="d-inline ms-2">
                            <BsCurrencyRupee className="mb-1" />
                            300
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-bs-toggle="modal" data-bs-target="#exampleModal2">
              <div
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Message"
              >
                <BiMessageRounded className="" size={20} />
              </div>
            </div>
            <div
              className="modal "
              id="exampleModal2"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              data-backdrop="false"
            >
              <div className="modal-dialog position-absolute end-0">
                <div className="modal-content mt-4">
                  <div className="modal-header border-0">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Messages
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body ">
                    <button
                      className="d-flex gap-3 button-navbar w-100 py-2"
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        margin: "-20px 0 -10px 0",
                      }}
                    >
                      <div className="d-flex gap-3 ">
                        <div className="">
                          <img
                            src={avatar2}
                            alt=""
                            className="rounded-circle"
                            style={{ width: "60px" }}
                          />
                        </div>
                        <div className="text-start mt-2">
                          <b className="fs-5">Roman Joined the team</b>

                          <p className="text-secondary">Congrats to him</p>
                        </div>
                      </div>
                    </button>
                    <hr />
                    <button
                      className="d-flex gap-3 button-navbar w-100 py-2"
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        margin: "-20px 0 -10px 0",
                      }}
                    >
                      <div className="d-flex gap-3 ">
                        <div className="">
                          <img
                            src={avatar3}
                            alt=""
                            className="rounded-circle"
                            style={{ width: "60px" }}
                          />
                        </div>
                        <div className="text-start mt-2">
                          <b className="fs-5">New Message Request</b>

                          <p className="text-secondary">
                            Salma sent you the new message
                          </p>
                        </div>
                      </div>
                    </button>
                    <hr />
                    <button
                      className="d-flex gap-3 button-navbar w-100 py-2"
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        margin: "-20px 0 -10px 0",
                      }}
                    >
                      <div className="d-flex gap-3 ">
                        <div className="">
                          <img
                            src={avatar4}
                            alt=""
                            className="rounded-circle"
                            style={{ width: "60px" }}
                          />
                        </div>
                        <div className="text-start mt-2">
                          <b className="fs-5">New Payment Recieved</b>

                          <p className="text-secondary">Check your earning</p>
                        </div>
                      </div>
                    </button>
                    <hr />
                    <button className="btn btn-primary w-100">
                      See all the messages
                    </button>
                    <div className="modal-footer border-0"></div>
                  </div>
                </div>
              </div>
            </div>
            <div data-bs-toggle="modal" data-bs-target="#exampleModal1">
              <div
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Notification"
              >
                <AiOutlineBell className="" size={20} />
              </div>
            </div>
            <div
              className="modal "
              id="exampleModal1"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              data-backdrop="false"
            >
              <div className="modal-dialog position-absolute end-0">
                <div className="modal-content mt-4">
                  <div className="modal-header border-0">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Notification
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body ">
                    <button
                      className="d-flex gap-3 button-navbar w-100 py-2"
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        margin: "-20px 0 -10px 0",
                      }}
                    >
                      <div className="d-flex gap-3 ">
                        <div className="">
                          <img
                            src={avatar2}
                            alt=""
                            className="rounded-circle"
                            style={{ width: "60px" }}
                          />
                        </div>
                        <div className="text-start mt-2">
                          <b className="fs-5">Roman Joined the team</b>

                          <p className="text-secondary">Congrats to him</p>
                        </div>
                      </div>
                    </button>
                    <hr />
                    <button
                      className="d-flex gap-3 button-navbar w-100 py-2"
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        margin: "-20px 0 -10px 0",
                      }}
                    >
                      <div className="d-flex gap-3 ">
                        <div className="">
                          <img
                            src={avatar3}
                            alt=""
                            className="rounded-circle"
                            style={{ width: "60px" }}
                          />
                        </div>
                        <div className="text-start mt-2">
                          <b className="fs-5">New Message Request</b>

                          <p className="text-secondary">
                            Salma sent you the new message
                          </p>
                        </div>
                      </div>
                    </button>
                    <hr />
                    <button
                      className="d-flex gap-3 button-navbar w-100 py-2"
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        margin: "-20px 0 -10px 0",
                      }}
                    >
                      <div className="d-flex gap-3 ">
                        <div className="">
                          <img
                            src={avatar4}
                            alt=""
                            className="rounded-circle"
                            style={{ width: "60px" }}
                          />
                        </div>
                        <div className="text-start mt-2">
                          <b className="fs-5">New Payment Recieved</b>

                          <p className="text-secondary">Check your earning</p>
                        </div>
                      </div>
                    </button>
                    <hr />
                    <button className="btn btn-primary w-100">
                      See all the Notification
                    </button>
                    <div className="modal-footer border-0"></div>
                  </div>
                </div>
              </div>
            </div>
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <button
                type="button"
                className="d-flex btn button-navbar "
                style={{ width: "8.5rem", height: "2.5rem" }}
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Profile"
              >
                <img
                  src={avatar}
                  className="rounded-circle "
                  style={{ width: "25px" }}
                  alt="Avatar"
                />
                <p className="text-secondary position-relative">Hi, Michael</p>
              </button>
            </div>
            <div
              className="modal "
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              data-backdrop="false"
            >
              <div className="modal-dialog position-absolute end-0">
                <div className="modal-content mt-4" style={{ width: "29rem" }}>
                  <div className="modal-header border-0">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      User Profile
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body ">
                    <div className="d-flex gap-3 ">
                      <div className="">
                        <img
                          src={avatar}
                          alt=""
                          className="rounded-circle"
                          style={{ width: "100px" }}
                        />
                      </div>
                      <div className="text-start mt-2">
                        <b className="fs-5">Michael Robert</b>
                        <p>Administrator</p>
                        <p
                          className="text-secondary"
                          style={{ marginTop: "-1rem" }}
                        >
                          info@shop.com
                        </p>
                      </div>
                    </div>
                    <hr />
                    <button
                      className="d-flex gap-3 button-navbar w-100"
                      style={{ border: "none", borderRadius: "5px" }}
                    >
                      <button
                        className="btn mt-2"
                        type="button"
                        style={{ backgroundColor: "#e5fafb", border: "none" }}
                      >
                        <BsCurrencyDollar style={{ color: "03C9D7" }} />
                      </button>
                      <div className="">
                        <b className="text-start" style={{ fontSize: "20px" }}>
                          My Profile
                        </b>
                        <p className="text-secondary">Acccount Settings</p>
                      </div>
                    </button>
                    <hr />
                    <button
                      className="d-flex gap-3 button-navbar w-100"
                      style={{ border: "none", borderRadius: "5px" }}
                    >
                      <button
                        className="btn mt-2"
                        type="button"
                        style={{ backgroundColor: "#e5fafb", border: "none" }}
                      >
                        <BsCurrencyDollar style={{ color: "03C9D7" }} />
                      </button>
                      <div className="">
                        <b className="text-start" style={{ fontSize: "20px" }}>
                          My Inbox
                        </b>
                        <p className="text-secondary">Messages & Emails</p>
                      </div>
                    </button>
                    <hr />
                    <button
                      className="d-flex button-navbar w-100 gap-3"
                      style={{ border: "none", borderRadius: "5px" }}
                    >
                      <button
                        className="btn mt-2"
                        type="button"
                        style={{ backgroundColor: "#fec90f", border: "none" }}
                      >
                        <BsCurrencyDollar style={{ color: "white" }} />
                      </button>
                      <div className="">
                        <b className="text-start" style={{ fontSize: "20px" }}>
                          My Tasks
                        </b>
                        <p className="text-secondary">Todo and daily Task</p>
                      </div>
                    </button>
                    <hr />
                    <button className="btn btn-primary w-100">Logout</button>
                    <div className="modal-footer border-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
