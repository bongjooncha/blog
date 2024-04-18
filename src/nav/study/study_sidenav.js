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
  const [yoloOpen, setYoloOpen] = useState(true);

  // 심층강화
  const [simReinOpen, setSimReinOpen] = useState(true);

  return (
    <div className="side_nav">
      <div className="side_main_title">Study</div>
      <div className="title">
        <div className="title1">인공지능</div>
        <br />
        <div className="title">
          <div className="title2">컴퓨터 비젼</div>
          <br />
          <div className="title title3">
            <Link to={"../study/yolov8"}>
              <a>Yolo v8</a>
            </Link>
            <button onClick={() => setSimReinOpen(!simReinOpen)}>⬇</button>
            <Collapse in={simReinOpen}>
              <div>
                <div className="title title4">Yolo param</div>
              </div>
            </Collapse>
          </div>
        </div>
        <br />
        <div className="title">
          <div className="title2">강화 학습</div>
          <br />
          <div className="title title3">
            <Link to={"../study/강화학습"}>
              <a>심층강화학습</a>
            </Link>
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
    </div>
  );
}

export default StudySidenav;
