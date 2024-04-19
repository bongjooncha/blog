import { React } from "react";

import "./main.css";

// 프로젝트
import Project from "./project";

// 공부
import Study from "./study";

function Main() {
  return (
    <>
      <div className="main_home">
        <p>
          현재는 심층강화학습, 웹통신, yolo v8을 제외한 페이지는 업로드 되지
          않았습니다.
        </p>
        <h1 style={{ marginBottom: "-5vh" }}>Projects</h1>
      </div>
      <Project />
      <div className="main_home">
        <h1 style={{ marginBottom: "-7vh" }}>Study</h1>
      </div>
      <Study />
    </>
  );
}

export default Main;
