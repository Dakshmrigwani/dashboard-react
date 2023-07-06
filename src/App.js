import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Calendar from "./Pages/Calendar";
import Area from "./Pages/Area"
import Home from "./Components/Home";
import Bar from "./Pages/Bar";
import ColorMapping from "./Pages/ColorMapping"
import ColorPicker from "./Pages/ColorPicker"
import Customer from "./Pages/Customer"
import Editor from "./Pages/Editor"
import Employees from "./Pages/Employees"
import Financial from "./Pages/Financial"
import Kanban from "./Pages/Kanban"
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
      <Route path="/Pages/Calendar" element={<Calendar />} />
      <Route path="/Pages/ColorMapping" element={<ColorMapping />} />
      <Route path="/Pages/ColorPicker" element={<ColorPicker />} />
      <Route path="/Pages/Customer" element={<Customer />} />
      <Route path="/pages/Editor" element={<Editor />} />
      <Route path="/pages/Employees" element={<Employees />} />
      <Route path="/pages/Financial" element={<Financial />} />
      <Route path="/pages/Kanban" element={<Kanban />} />
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
