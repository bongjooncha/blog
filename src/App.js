import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Headnav from "./nav/headnav";
import Main from "./pages/main";
import Study from "./pages/study";
import Project from "./pages/project";

function App() {
  return (
    <div className="App">
      <Headnav />
      <BrowserRouter>
        <Routes>
          <Route path="/blog" element={<Main />} />
          <Route path="/blog/study" element={<Study />} />
          <Route path="/blog/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
