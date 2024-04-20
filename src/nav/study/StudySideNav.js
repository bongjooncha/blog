import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";

import DeepSide from "./AI/DeepSide";
import CompVisionSide from "./AI/ComVisionSide";
import SimReinSide from "./AI/SimReinSide";

import "../nav.css";

function StudySidenav() {
  useEffect(() => {
    document.querySelectorAll(".title4 a").forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }, []);

  // 웹 통신
  const [webProOpen, setWebProOpen] = useState(false);

  return (
    <div className="side_nav">
      <div className="side_main_title">Study</div>
      {/* 인공지능 */}
      <div className="title">
        <div className="title1">인공지능</div>
        <br />
        <DeepSide />
        <br />
        <CompVisionSide />
        <br />
        <SimReinSide />
      </div>
      <br />
      <br />
      {/* 웹프로그래밍 */}
      <div className="title">
        <div className="title1">웹프로그래밍</div>
        <br />
        {/* 프론트엔드 */}
        <div className="title">
          <div className="title2">프론트엔드</div>
          <br />
        </div>
        <br />
        {/* 백엔드 */}
        <div className="title">
          <div className="title2">백엔드</div>
          <br />
          <div className="title title3">
            <Link to={"../study/web_protocal"}>웹 통신</Link>
            <button onClick={() => setWebProOpen(!webProOpen)}>⬇</button>
            <Collapse in={webProOpen}>
              <div>
                <div className="title title4">
                  <a href="#ajax">AJAX</a>
                </div>
                <div className="title title4">
                  <a href="#sse">SSE</a>
                </div>
                <div className="title title4">
                  <a href="#polling">Long/Short Polling</a>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default StudySidenav;
