import { React } from "react";

import ReinCard from "./card/study/reinforce_card";
import Yolo from "./card/study/yolo";
import Optimizer from "./card/study/optimizer";

function Study() {
  return (
    <div className="main_home">
      <h1>AI</h1>
      <div className="con_card">
        <ReinCard />
        <Yolo />
        <Optimizer />
      </div>
      <br />
      <br />
      <br />
      <h1>Web</h1>
      <div className="con_card">
        <ReinCard />
      </div>
      <br />
      <br />
      <br />
      <h1>아두이노/라즈베리파이</h1>
      <div className="con_card">
        <ReinCard />
      </div>
    </div>
  );
}

export default Study;
