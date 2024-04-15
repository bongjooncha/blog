import { React } from "react";

import "./main.css";

// 프로젝트
import Gram9Card from "./card/project/gram9_card";
import SFCard from "./card/project/sf_card";
import CoinAuto from "./card/project/coin_auto";
import Asset from "./card/project/asset";

// 공부
import ReinCard from "./card/study/reinforce_card";

function Main() {
  return (
    <div className="main_home">
      <p>현재는 심층강화학습을 제외한 페이지는 업로드 되지 않았습니다.</p>
      <h1>Projects</h1>
      <div className="con_card">
        <Gram9Card />
        <SFCard />
        <CoinAuto />
        <Asset />
      </div>
      <br />
      <br />
      <br />
      <h1>Study</h1>
      <div className="con_card">
        <ReinCard />
      </div>
    </div>
  );
}

export default Main;
