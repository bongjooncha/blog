import { React } from "react";
import Gram9Card from "./card/project/gram9_card";
import SFCard from "./card/project/sf_card";
import CoinAuto from "./card/project/coin_auto";
import Asset from "./card/project/asset";

function Project() {
  return (
    <div className="main_home">
      <div className="con_card">
        <Gram9Card />
        <SFCard />
        <CoinAuto />
        <Asset />
      </div>
    </div>
  );
}

export default Project;
