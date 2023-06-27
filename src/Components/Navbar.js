import React from "react";
import { SiShopware } from "react-icons/si";
import { BiShoppingBag, BiPyramid } from "react-icons/bi";
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
} from "react-icons/ai";

export default function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="filter-section scrollbar-primary">
          <div
            className="offcanvas offcanvas-start show"
            tabIndex="-1"
            id="offcanvasDark"
            aria-labelledby="offcanvasDarkLabel"
          >
            <div className="offcanvas-header">
              <div className="row">
                <div className="col">
                  <SiShopware />
                </div>
                <div className="col text-start w-100">
                  <h5 className="offcanvas-title" id="offcanvasDarkLabel">
                    Dashbordo
                  </h5>
                </div>
              </div>
              <button
                type="button"
                className="btn-close btn-close-dark"
                data-bs-dismiss="offcanvasDark"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="text-secondary text-start">
                <h5>DASHBOARD</h5>
              </div>
              <div className="d-flex gap-3 py-3">
                <BiShoppingBag />
                <p>Ecommerce</p>
              </div>
              <div className="text-secondary text-start">
                <h5>Pages</h5>
              </div>
              <div className="d-flex gap-3 pt-3">
                <BsCart3 />
                <p>Orders</p>
              </div>
              <div className="d-flex gap-3 pt-3">
                <BsPeople />
                <p>Employees</p>
              </div>
              <div className="d-flex gap-3 py-3">
                <FcBusinessman />
                <p>Customer</p>
              </div>
              <div className="text-secondary text-start">
                <h5>APPS</h5>
              </div>
              <div className="d-flex gap-3 pt-3">
                <BsCalendarEvent />
                <p>Calendar</p>
              </div>
              <div className="d-flex gap-3 pt-3">
                <BsKanban />
                <p>Kanban</p>
              </div>
              <div className="d-flex gap-3 pt-3">
                <VscEditorLayout />
                <p>Editor</p>
              </div>
              <div className="d-flex gap-3 pt-3">
                <TbColorPicker />
                <p>Color picker</p>
              </div>
              <div className="text-secondary text-start">
                <h5>Charts</h5>
              </div>
              <div className="d-flex gap-3 pt-3">
                <AiOutlineLineChart />
                <p>Line</p>
              </div>
              <div className="d-flex gap-3 pt-3">
                <AiOutlineAreaChart />
                <p>Area</p>
              </div>
              <div className="d-flex gap-3 pt-3">
                <BsFillBarChartFill />
                <p>Bar</p>
              </div>
              <div className="d-flex gap-3 pt-3">
                <AiFillPieChart />
                <p>Pie</p>
              </div>
              <div className="d-flex gap-3 pt-3">
                <MdOutlineCandlestickChart />
                <p>Financial</p>
              </div>
              <div className="d-flex gap-3 pt-3">
                <BsBarChartLine />
                <p>Color Mapping</p>
              </div>
              <div className="d-flex gap-3 pt-3">
                <BiPyramid />
                <p>Pyramid</p>
              </div>
              <div className="d-flex gap-3 pt-3">
                <MdStackedLineChart />
                <p>Stacked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
