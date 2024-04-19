import { React, useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";

function DeepSide() {
  // yolo
  const [optimizerOpen, setOptimizerOpen] = useState(false);

  return (
    <>
      {/* 딥러닝 */}
      <div className="title">
        <div className="title2">딥러닝</div>
        <br />
        <div className="title title3">
          <Link to={"../study/optimizer"}>Optimizer</Link>
          <button onClick={() => setOptimizerOpen(!optimizerOpen)}>⬇</button>
          <Collapse in={optimizerOpen}>
            <div>
              <div className="title title4">
                <a href="#gd">GD</a>
              </div>
              <div className="title title4">
                <a href="#bgd">BGD</a>
              </div>
              <div className="title title4">
                <a href="#mgd">MGD</a>
              </div>
              <div className="title title4">
                <a href="#sgd">SGD</a>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default DeepSide;
