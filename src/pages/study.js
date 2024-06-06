import { React } from "react";

// import ReinCardCard from "./card/study/AI/ReinforceCard";
// import YoloCard from "./card/study/AI/YoloCard";
// import OptimizerCard from "./card/study/AI/OptimizerCard";

// import WebProCard from "./card/study/WEB/WebProtCard";

function Study() {
  return (
    <div className="main_home">
      <h2>AI</h2>
      <div className="con_card">
        {/* <ReinCardCard />
        <YoloCard />
        <OptimizerCard /> */}
      </div>
      <br />
      <br />
      <br />
      <h2>Web</h2>
      <div className="con_card">{/* <WebProCard /> */}</div>
      <br />
      <br />
      <br />
      <h1>아두이노/라즈베리파이</h1>
      <div className="con_card">{/* <ReinCardCard /> */}</div>
    </div>
  );
}

export default Study;
