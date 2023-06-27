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
  AiOutlineMenu,
} from "react-icons/ai";

export default function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="">
          <a
            className=""
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role=""
            aria-controls="offcanvasExample"
          >
            <AiOutlineMenu />
          </a>
        </div>
        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          style={{ width: "21rem" }}
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
      </div>
    </>
  );
}
