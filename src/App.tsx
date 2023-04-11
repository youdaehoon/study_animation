import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/index";
import PageDropdown from "./pages/dropdown";
import PageOnload from "./pages/onload";
import PageObserver from "./pages/observer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dropdown" element={<PageDropdown />} />
        <Route path="/onload" element={<PageOnload />} />
        <Route path="/observer" element={<PageObserver />} />
      </Routes>
    </div>
  );
}

export default App;
