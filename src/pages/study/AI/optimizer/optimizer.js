import { React } from "react";
import StudySidenav from "../../../../nav/study/StudySideNav";

import Optimizer_pic from "../../../../img/study/optimizer/optimizer_pic.gif";
import gmlm_pic from "../../../../img/study/optimizer/gmlm_pic.png";
import opti_type_pic from "../../../../img/study/optimizer/opti_type.png";

function Optimizer() {
  return (
    <>
      <StudySidenav />
      <div className="main_con">
        <div className="contents">
          <h1>Optimizer</h1>
          <br />
          <p>
            &emsp;&emsp;Optimizer은 optimization(최적화)을 하는 것이라고 볼 수
            있을것 같다. 우리는 머신러닝, 딥러닝을 할때 손실함수의 최소값을 찾기
            위해서 학습을 시키는 것이다. 여기서 손실함수의 값은 실제
            결과값(정답) y와 모델의 추정치 ŷ의 차이이다.
            <br />
            <br />
            &emsp;&emsp;딥러닝 모델의 손실함수의 값을 구하기 위해 들어가는
            변수는 1,2개가 아니기에 2,3차원의 함수가 아니다 그럼에도 이를 좀 더
            단순화 시켜서 직관적으로 보기 위해서 우리가 알기 이해할 수 있는
            2,3차원 함수로된 예시들을 보고 또 이를 통해 식을 만들어 나간다.
            <br />
            <br />
            &emsp;&emsp;Optimizer에 대해서 자세히 알아보자. optimizer은
            왼쪽그림에서는 0에 가까운값 오른쪽 그림에서는 GM(Global Minimum)을
            찾는 과정이라고 볼 수 있다.
            <br />
            <br />
            <div className="pic_div">
              <a href=" https://velog.io/@freesky/Optimizer">
                <img src={Optimizer_pic} alt="ReinforceCh1ment Learning" />{" "}
                https://velog.io/@freesky/Optimizer
              </a>
              <a href=" https://www.geeksforgeeks.org/intuition-of-adam-optimizer/">
                <img src={gmlm_pic} alt="ReinforceCh1ment Learning" />{" "}
                https://www.geeksforgeeks.org/intuition-of-adam-optimizer/
              </a>
            </div>
            <br />
            <br />
            &emsp;&emsp; 그리고 이를 찾기 위해서 다양한 방식이 연구되었으며,
            이러한 방식들에 대해서 하나하나 알아보고자 한다.
            <br />
            <br />
            <div className="pic_div">
              <a href=" https://velog.io/@freesky/Optimizer">
                <img src={opti_type_pic} alt="ReinforceCh1ment Learning" />{" "}
                <br />
                https://velog.io/@freesky/Optimizer
              </a>
            </div>
            <br />
            <h2 id="gd">GD(Gradient Descent)</h2>
            &emsp;&emsp;경사 하강법(Gradient Descent)은 Optimizer중 가장 먼저
            등장한 최적화 방법으로 19세기 중반에 등장했다고 한다. 경사 하강법은
            말 그대로 경사를 타고 내려가며 최소값을 찾는 방식이다. 이때 얼만큼
            내려 갈지를 결정하는 것이 바로 경사 하강 법이다. 이는 향후 나올
            optimizer의 시초라고 볼 수 있다.
            <br />
            <br />
            &emsp;&emsp;최적화 할 함수 f(x)에 대해서 현재 지점인 θt​ 가
            주어졌을때 다음 이동할 점인 θt+1 을 xi와 xi에서의 기울기 그리고
            매개변수 α 에 의해서 결정하는 것이다. 위에 그림을 보면 경사하강법은
            경사가 0이 되는 경우 멈추기때문에 만일 LM(local minimum)을 만났을
            경우에도 GM(Global minimum)으로 판단할 수 있다. 또한 최고점일
            경우에도 기울기가 0이 될 수 있기 때문에 saddling point(안장점)을
            결과값으로 도출하는 불상사가 발생할 수 있다.
          </p>
          <br />
        </div>
      </div>
      <br />
    </>
  );
}

export default Optimizer;
