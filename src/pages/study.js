import { React } from "react";

import ReinCard from "./card/study/AI/reinforce_card";
import Yolo from "./card/study/AI/yolo_card";
import Optimizer from "./card/study/AI/optimizer_card";

import WebPro from "./card/study/WEB/web_pro_card";

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
        <WebPro />
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
