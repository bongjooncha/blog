import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";

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

  // yolo
  const [yoloOpen, setYoloOpen] = useState(false);

  // 심층강화
  const [simReinOpen, setSimReinOpen] = useState(false);

  // 웹 통신
  const [webProOpen, setWebProOpen] = useState(false);

  return (
    <div className="side_nav">
      <div className="side_main_title">Study</div>
      {/* 인공지능 */}
      <div className="title">
        <div className="title1">인공지능</div>
        <br />
        {/* 컴퓨터 비젼 */}
        <div className="title">
          <div className="title2">컴퓨터 비젼</div>
          <br />
          <div className="title title3">
            <Link to={"../study/yolov8"}>Yolo v8</Link>
            <button onClick={() => setSimReinOpen(!simReinOpen)}>⬇</button>
            <Collapse in={simReinOpen}>
              <div>
                <div className="title title4">
                  <a href="#param">Yolo param</a>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
        <br />
        {/* 강화학습 */}
        <div className="title">
          <div className="title2">강화 학습</div>
          <br />
          <div className="title title3">
            <Link to={"../study/심층강화학습"}>심층강화학습</Link>
            <button onClick={() => setYoloOpen(!yoloOpen)}>⬇</button>
            <Collapse in={yoloOpen}>
              <div>
                <div className="title title4">
                  <a href="#ch1">Ch1.강화학습 개요</a>
                </div>
                <div className="title title4">
                  <a href="#ch2">Ch2. 마르코프 결정 프로세스</a>
                </div>
                <div className="title title4">
                  <a href="#ch3">Ch3. 동적 프로그래밍</a>
                </div>
                <div className="title title4">Ch4</div>
              </div>
            </Collapse>
          </div>
        </div>
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
    </div>
  );
}

export default StudySidenav;
