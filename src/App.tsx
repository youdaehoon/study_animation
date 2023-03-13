import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/index";
import Dropdown from "./pages/dropdown";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dropdown" element={<Dropdown />} />
      </Routes>
    </div>
  );
}

export default App;
