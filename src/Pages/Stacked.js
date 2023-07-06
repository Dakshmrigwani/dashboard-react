import React from "react"

export default function Stacked(){
    return(
        <>
        <div className="container">
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
              <div className=" button-offcanvas">
                <Link
                  to="/Pages/Home"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <BiShoppingBag />
                  <p>Ecommerce</p>
                </Link>
              </div>
              <div className="text-secondary text-start">
                <h5>Pages</h5>
              </div>
              <div className=" button-offcanvas">
                <Link
                  to="/Pages/orders"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <BsCart3 />
                  <p>Orders</p>
                </Link>
              </div>
              <div className=" button-offcanvas">
                <Link
                  to="/Pages/Employees"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <BsPeople />
                  <p>Employees</p>
                </Link>
              </div>
              <div className=" button-offcanvas">
                <Link
                  to="/Pages/Customer"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <FcBusinessman />
                  <p>Customer</p>
                </Link>
              </div>
              <div className="text-secondary text-start">
                <h5>APPS</h5>
              </div>
              <div className="button-offcanvas">
                <Link
                  to="/Pages/Calendar"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <BsCalendarEvent />
                  <p>Calendar</p>
                </Link>
              </div>
              <div className="button-offcanvas">
                <Link
                  to="/Pages/Kanban"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <BsKanban />
                  <p>Kanban</p>
                </Link>
              </div>
              <div className="button-offcanvas">
                <Link
                  to="/Pages/Editor"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <VscEditorLayout />
                  <p>Editor</p>
                </Link>
              </div>
              <div className="button-offcanvas">
                <Link
                  to="/Pages/ColorPicker"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <TbColorPicker />
                  <p>Color picker</p>
                </Link>
              </div>
              <div className="text-secondary text-start">
                <h5>Charts</h5>
              </div>
              <div className=" button-offcanvas">
                <Link
                  to="/Pages/Line"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <AiOutlineLineChart />
                  <p>Line</p>
                </Link>
              </div>
              <div className="button-offcanvas">
                <Link
                  to="/Pages/Area"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <AiOutlineAreaChart />
                  <p>Area</p>
                </Link>
              </div>
              <div className="button-offcanvas">
                <Link
                  to="/Pages/Bar"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <BsFillBarChartFill />
                  <p>Bar</p>
                </Link>
              </div>
              <div className="button-offcanvas">
                <Link
                  to="/Pages/Pie"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <AiFillPieChart />
                  <p>Pie</p>
                </Link>
              </div>
              <div className="button-offcanvas">
                <Link
                  to="/Pages/Financial"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <MdOutlineCandlestickChart />
                  <p>Financial</p>
                </Link>
              </div>
              <div className="button-offcanvas">
                <Link
                  to="/Pages/ColorMapping"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <BsBarChartLine />
                  <p>Color Mapping</p>
                </Link>
              </div>
              <div className="button-offcanvas">
                <Link
                  to="/Pages/Pyramid"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <BiPyramid />
                  <p>Pyramid</p>
                </Link>
              </div>
              <div className="button-offcanvas">
                <Link
                  to="/Pages/Stacked"
                  className="text-dark d-flex gap-3 my-1 p-1 ps-3 pt-2 underText"
                >
                  <MdStackedLineChart />
                  <p>Stacked</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}