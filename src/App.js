import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./Components/Home";

export default function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}
