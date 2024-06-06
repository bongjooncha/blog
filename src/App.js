import "./App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Headnav from "components/layout/Nav/index";
import Main from "pages/main";
import Study from "pages/study";
import Project from "pages/project";
// study
// import Reinforce from "./pages/study/AI/reinforce/reinforcement";
import Yolov8 from "./pages/study/AI/yolov8/yolo";
import Optimizer from "./pages/study/AI/optimizer/optimizer";
// project
import Gram9 from "./pages/project/gram9";
import WebPro from "./pages/study/WEB/back/webPro";

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
          {/* ai */}
          {/* <Route path="/study/deep-rfl" element={<Reinforce />} /> */}
          <Route path="/study/yolov8" element={<Yolov8 />} />
          <Route path="/study/optimizer" element={<Optimizer />} />
          {/* web */}
          <Route path="/study/web-protocal" element={<WebPro />} />

          {/* project */}
          <Route path="/project/9gram" element={<Gram9 />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
