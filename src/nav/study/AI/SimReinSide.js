import { React, useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";

function SimReinSide() {
  // 심층강화
  const [simReinOpen, setSimReinOpen] = useState(false);
  return (
    <>
      {/* 강화학습 */}
      <div className="title">
        <div className="title2">강화 학습</div>
        <br />
        <div className="title title3">
          <Link to={"../study/심층강화학습"}>심층강화학습</Link>
          <button onClick={() => setSimReinOpen(!simReinOpen)}>⬇</button>
          <Collapse in={simReinOpen}>
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
    </>
  );
}

export default SimReinSide;
