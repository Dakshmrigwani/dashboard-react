import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Area from "./Pages/Area"
import Home from "./Components/Home";
import Bar from "./Pages/Bar";
import ColorMapping from "./Pages/ColorMapping"
import Customer from "./Pages/Customer"
import Employees from "./Pages/Employees"
import Financial from "./Pages/Financial"
import Line from "./Pages/Line"
import Orders from "./Pages/orders"
import Pie from "./Pages/Pie"
import Pyramid from "./Pages/Pyramid"
import Stacked from "./Pages/Stacked"

export default function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages/Home" element={<Home />} />
      <Route path="/pages/Area" element={<Area />} />
      <Route path="/Pages/Bar" element={<Bar />} />
      <Route path="/Pages/ColorMapping" element={<ColorMapping />} />
      <Route path="/Pages/Customer" element={<Customer />} />
      <Route path="/pages/Employees" element={<Employees />} />
      <Route path="/pages/Financial" element={<Financial />} />
      <Route path="/pages/Line" element={<Line />} />
      <Route path="/pages/Pie" element={<Pie />} />
      <Route path="/pages/orders" element={<Orders />} />
      <Route path="/pages/Pyramid" element={<Pyramid />} />
      <Route path="/pages/Stacked" element={<Stacked />} />
      
      
    </Routes>
  </Router>
  </>
  );
}
