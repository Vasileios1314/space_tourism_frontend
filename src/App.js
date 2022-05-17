import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <Routes>{/* <Route exact path="/" element={<Events />} /> */}</Routes>
    </div>
  );
}

export default App;
