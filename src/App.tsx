import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/index";
import PageDropdown from "./pages/dropdown";
import PageOnload from "./pages/onload";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dropdown" element={<PageDropdown />} />
        <Route path="/onload" element={<PageOnload />} />
      </Routes>
    </div>
  );
}

export default App;
