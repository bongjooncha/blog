import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import "./nav.css";

function Sidenav() {
  // yolo
  const [yoloOpen, setYoloOpen] = useState(false);

  // 심층강화
  const [simReinOpen, setSimReinOpen] = useState(false);

  return (
    <div className="side_nav">
      <div className="side_main_title">Study</div>
      <div className="title">
        <div className="title1">인공지능</div>
        <div className="title">
          <div className="title2">컴퓨터 비젼</div>
          <div className="title title3">
            YOLO v8
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
          <div className="title title3">
            심층강화학습
            <button onClick={() => setYoloOpen(!yoloOpen)}>⬇</button>
            <Collapse in={yoloOpen}>
              <div>
                <div className="title title4">Ch1.강화학습 개요</div>
                <div className="title title4">
                  Ch2. 마르코프 <br />
                  &emsp;&emsp;&emsp;결정 프로세스
                </div>
                <div className="title title4">Ch3. 동적 프로그래밍</div>
                <div className="title title4">Ch4</div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
