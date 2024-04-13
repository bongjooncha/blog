import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import "./nav.css";

function Sidenav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="side_nav">
      <p className="side_1">인공지능</p>
      <p className="side_2">강화학습</p>
      <p
        className="side_3"
        onClick={() => setOpen(!open)}
        aria-controls="심층강화학습"
        aria-expanded={open}
      >
        심층강화학습
      </p>
      <Collapse in={open}>
        <div>
          <p
            className="side_4"
            id="심층강화학습"
            onClick={() => setOpen(!open)}
            aria-controls="심층강화학습"
            aria-expanded={open}
          >
            Ch1.강화학습 개요
          </p>
          <p className="side_4" id="심층강화학습">
            Ch2
          </p>
          <p className="side_4" id="심층강화학습">
            Ch3
          </p>
          <p className="side_4" id="심층강화학습">
            Ch4
          </p>
        </div>
      </Collapse>
    </div>
  );
}

export default Sidenav;
