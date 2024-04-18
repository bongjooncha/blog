import { React } from "react";
import StudySidenav from "../../../nav/study/study_sidenav";
import ReinforceCh1 from "./reinCh1";
import ReinforceCh2 from "./reinCh2";
import ReinforceCh3 from "./reinCh3";

function Reinforce() {
  return (
    <>
      <StudySidenav />
      <ReinforceCh1 />
      <br />
      <ReinforceCh2 />
      <br />
      <ReinforceCh3 />
    </>
  );
}

export default Reinforce;
