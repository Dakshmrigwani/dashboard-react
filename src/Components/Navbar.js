import React,{useEffect} from "react";
import { SiShopware } from "react-icons/si";
import avatar from "../data/avatar.jpg";
import { BiShoppingBag, BiPyramid, BiMessageRounded } from "react-icons/bi";
import { MdOutlineCandlestickChart, MdStackedLineChart } from "react-icons/md";
import {
  BsCart3,
  BsPeople,
  BsCalendarEvent,
  BsKanban,
  BsFillBarChartFill,
  BsBarChartLine,
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
              class="btn-close"
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
            <AiOutlineMenu className="" />
          </a>
<div className="d-flex gap-3">
      <div
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Cart"
        style={{ height: "30px" }}
        
      >
        <BsCart3  />
      </div>
      <div
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Message"
      >
        <BiMessageRounded className="" />
      </div>
      <div
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Notification"
        
      >
        <AiOutlineBell className="" />
      </div>
      <button type="button" className="d-flex btn button-navbar " style={{width:'8.5rem',height:'2.5rem'}} data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Profile">
      <img
        src={avatar}
        className="rounded-circle "
        style={{ width: "25px" }}
        alt="Avatar"
      /><p className="text-secondary ">Hi, Michael</p>
      </button>
    </div>
        </div>
      </div>
    </>
  );
}
