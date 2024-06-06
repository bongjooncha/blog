import { React } from "react";

import AI from "components/card/study/AI_study";

import Web from "components/card/study/Web_study";

function Study() {
  return (
    <div className="main_home">
      <h2>AI</h2>
      <div className="con_card">
        <AI />
      </div>
      <br />
      <br />
      <br />
      <h2>Web</h2>
      <div className="con_card">
        <Web />
      </div>
      <br />
      <br />
      <br />
      <h1>아두이노/라즈베리파이</h1>
      <div className="con_card">{/* <ReinCardCard /> */}</div>
    </div>
  );
}

export default Study;
