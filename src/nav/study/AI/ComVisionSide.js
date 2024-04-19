import { React, useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";

function CompVisionSide() {
  // yolo
  const [yoloOpen, setYoloOpen] = useState(false);

  return (
    <>
      {/* 컴퓨터 비젼 */}
      <div className="title">
        <div className="title2">컴퓨터 비젼</div>
        <br />
        <div className="title title3">
          <Link to={"../study/yolov8"}>Yolo v8</Link>
          <button onClick={() => setYoloOpen(!yoloOpen)}>⬇</button>
          <Collapse in={yoloOpen}>
            <div>
              <div className="title title4">
                <a href="#param">Yolo param</a>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default CompVisionSide;
