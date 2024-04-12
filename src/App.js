import "./App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Headnav from "./nav/headnav";
import Main from "./pages/main";
import Study from "./pages/study";
import Project from "./pages/project";
// study
import Reinforce from "./pages/study/reinforcement";
// project
import Gram9 from "./pages/project/gram9";

function App() {
  return (
    <div className="App">
      <Headnav />
      {/* Browser Router 이 아닌 HashRouter 사용. 이유는 github url 관련 #을 써야함 */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/study" element={<Study />} />
          <Route path="/project" element={<Project />} />

          {/* study */}
          <Route path="/study/강화학습" element={<Reinforce />} />

          {/* project */}
          <Route path="/project/9gram" element={<Gram9 />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
