import { React } from "react";

import Pic1_1 from "../../../img/study/rein/ch1/1_1.png";
import Pic1_2 from "../../../img/study/rein/ch1/1_2.png";
import Pic1_3 from "../../../img/study/rein/ch1/1_3.png";
import Pic1_4 from "../../../img/study/rein/ch1/1_4.png";
import Pic1_5 from "../../../img/study/rein/ch1/1_5.png";
import Pic1_6 from "../../../img/study/rein/ch1/1_6.png";
import Pic1_7 from "../../../img/study/rein/ch1/1_7.png";

function ReinforceCh1() {
  return (
    <>
      <div className="main_con">
        <h1 id="ch1">Ch1. 강화학습의 개요</h1>
        <p className="top_ref">
          본 글은 "심층강화학습"을 토대로 작성된 글이다.
        </p>
        <br />
        <br />
        <br />
        <p className="contents">
          <h2>기계학습(Marchine Learning)</h2>
          &emsp;&emsp;기계학습은 인간의 지식을 기계에 이식하지 않고 기계 자체가
          과거 경험 데이터에서부터 스스로 지식을 발견해 나가는 새로운 인공지능
          방법이다. 이는 기계가 스스로 지식을 발견하므로 인간의 수준을 능가하는
          지식의 발견이나 성능을 제공할 수 있는 가능성을 포함한다.
          <br />
          <br />
          &emsp;&emsp;기계학습은 감독자학습, 비감독자학습, 강화학습으로
          구분된다. 감독자학습은 분류, 예측의 목적이다. 비감독자학습은
          학습데이터의 목적값 없이 데이터에 내재하고 있는 패턴을 자동으로
          탐지하는 학습방법이다. 그리고 ​강화학습은 목적을 달성하기 위한 최적의
          행동을 찾는 학습 방법이다.
          <br />
          <br />
          &emsp;&emsp;감독자 학습은 정확한 목적 값이 주어지지만, 강화학습은
          행동을 수행하는 시점 목적값을 알 수 없다. 최종값을 받은 이후에 그
          행동이 옳았던 것인지 판단을 할 수 있는 것이다.
          <br />
          <br />
          <h2>에이전트(agent)</h2>
          &emsp;&emsp;강화학습에서 스스로 학습하는 대상을 에이전트라고 한다.
          에이전트는 지속해서 환경과 상호작용하며 학습을 진행한다. 에이전트는 세
          가지 기능을 가지고 있어야 한다.
          <br />
          <p
            style={{
              margin: "1em 0 0 2em",
              fontStyle: "italic",
              fontWeight: "bold",
              color: "pink",
            }}
          >
            1. 환경을 인식할 수 있는 센서의 기능
            <br />
            2. 주어진 행동의 종류에서 특정한 행동을 선택해 수행하는 기능
            <br />
            3. 성취하고자 하는 목표의 인지기능
          </p>
          <br />
          <h2>보상(reward)</h2>
          &emsp;&emsp;보상은 에이전트가 행동을 함으로서 얻게 되는 결과값이다.
          보상을 통해서 에이전트의 행동이 목표달성에 도움이 되었는지를 알수
          있다. 이때 보상값은 행동과 상태에 따라서 즉각적으로 주어질 수도 있고,
          최종적인 상태까지 도달한 후에 제공받을 수도 있다. 이를 통해,
          에이전트가 특정한 상태에 있을 때에 어떠한 행동을 하는 것이 가장 최적의
          행동인지 학습할 수 있게 해준다.
          <br />
          <br />
          <div
            style={{
              textAlign: "center",
              fontStyle: "italic",
              fontWeight: "bold",
              color: "skyblue",
              fontSize: "25px",
            }}
          >
            t에서의 상태 = s<a style={{ fontSize: "15px" }}>t</a> , 행동 = a
            <a style={{ fontSize: "15px" }} alt="">
              t
            </a>
            , 보상 = R
            <a style={{ fontSize: "15px" }} alt="">
              t+1
            </a>
            , γ = 할인상수.
          </div>
          <br />
          &emsp;&emsp;할인 상수(discount factor)은 미래의 보상에 현재보다 낮은
          가치를 부여하기 위해 쓰인다. 이 값은 0에서 1 사이며, 학습을 시작하기
          이전 미리 지정하는 상수이다.
          <br />
          <br />
          &emsp;&emsp;보상은 R(s,a), R(s),Rs Ras 중 하나로 표기한다. 그리고
          보상에는 시간에 따라 보상의 값이 변하지 않는 정적 보상과, 시간에 따라
          변하는 비정적 보상이 있다. ​<br />
          <br />
          <a href="https://medium.com/comet-ml/part-1-reinforcement-learning-a-comprehensive-introduction-b23e79a6f588">
            <img
              src={Pic1_1}
              alt="ReinforceCh1ment Learning"
              style={{ width: "65vw" }}
            />
            "https://medium.com/comet-ml/part-1-reinforcement-learning-a-comprehensive-introduction-b23e79a6f588"
          </a>
          ​<br />
          <br />
          <h2>리턴(return)</h2>
          &emsp;&emsp;리턴은 특정한 상태에서 종료 상태에 도달하기 전까지 여러
          행동에 따라 발생하는 보상들의 합을 말한다. 좀 더 정확한 정의는 현재
          상태에서 종료 상태까지의 보상에 대한 함수이다. 보상은 특정한 상태 s
          <a style={{ fontSize: "15px" }} alt="">
            t
          </a>
          에서 G
          <a style={{ fontSize: "15px" }} alt="">
            t
          </a>
          를 갖는다. 그리고 G
          <a style={{ fontSize: "15px" }} alt="">
            t
          </a>
          에 대한 식은 위 그림에 나와 있다.
          <br />
          <br />
          <h2>상태(state)</h2>
          &emsp;&emsp;상태는 특정한 시점 에이전트가 속해 있는 상황의 값이다.
          처음 에이전트가 시작을 할 때는 ​시작상태(start state) 라고 말을 하고,
          에이전트의 변화가 없는 상태를 종료 상태 (final state)라고 한다. 상태는
          에이전트가 의사결정을 하는데 필요한 모든 정보들의 합을 말한다. 상태를
          표현할 때는 에이전트가 속해 있는 환경(environment)에서 관측이 가능한
          몇가지 변수를 이용해 표현한다. 그리고 강화학습에서 상태의 변수들은
          stochastic해야 한다. 이는 다음 상태 데이터를 결정할 때는 현재 상태
          값에 의해서만 결정되어야 한다는 것이다. 이를 마르코프 특징이라고 한다.
          <br />
          <br />
          <h2>관측(observation)</h2>
          &emsp;&emsp;관측은 에이전트가 실제로 환경에서 실제로 측정할 수 있는
          데이터이다. 강화학습에서 에이전트에게 환경의 모든 값을 주어지는 경우는
          드물며, 에이전트가 측정한 값 만이 관측값이라고 한다. 이는 상태와
          관측의 차이며, 에이전트는 상태값이 아닌 관측값을 통해서 학습을 해
          나간다는 것이다. 관측값은 o
          <a style={{ fontSize: "15px" }} alt="">
            t
          </a>
          로 표기한다.
          <br />
          <br />
          &emsp;&emsp;에이전트가 어떤 상태에 있는지 정확히 알 수 있는 모델을
          MDP(Markov decision process)라고 하고, 어떤 상태인지 정확히 알 수 없고
          관측 값을 통해 예측할 수 있는 모델을 POMDP(partially observable Markov
          decision process)라고 한다.
          <br />
          <br />
          &emsp;&emsp;에이전트가 과거의 특점 시점에서 지금 시점까지 관측하고,
          행동하고, 보상받은 모든 데이터 값을 이력(history) 이라고 한다. 이는
          ht로 표기된다. 강화학습의 에이전트는 현재 상태에서 어떤 행동을 하는
          것이 좋을지 판단할 때, 이력의 데이터에서 어떤 데이터를 사용해
          판단한다. 가장 간단한 방법은 모든 데이터를 사용하는 것이지만, 모든
          과거의 상태변화, 행동, 보상을 고려하는 모델은 비현실적이다. 그리고
          실제로 에이전트가 다음 행동을 결정하는 데 실제 영향을 미치는 데이터는
          극소수에 불가하기에 이력 전체에서 대부분의 데이터는 의사결정에 필요
          없다. 그리고&nbsp;
          <strong className="red_strong">
            이력의 모든 값 중 다음 행동의 결정에 영향을 주는 속성만을 모아놓은
            것을 상태(state)라고 한다.
          </strong>
          <br />
          <br />
          &emsp;&emsp;앞전에 상태는 에이전트가 속해있는 상황값이라고 말을
          했지만, 강화학습에서 통상적으로 사용되는 상태의 의미는 이력 이력 중
          다음 행동의 결정에 영향을 주는 속성만을 모아놓은 상태로 사용된다.
          그리고 이 의미를 가진 상태는 s
          <a style={{ fontSize: "12x" }} alt="">
            t
          </a>
          = f(h
          <a style={{ fontSize: "12px" }} alt="">
            t
          </a>
          )로 표기된다.
          <br />
          <br />
          &emsp;&emsp;그리고 이 상태의 종류는 또 두가지로 나뉜다. 에이전트가
          인식하고 사용할 수 있는 <strong>에이전트 상태(agent state)</strong> 와
          에이전트의 의사 결정에는 영향을 주지만 에이전트 값을 알 수 없는
          <strong>환경 상태(environment state)</strong>가 있다. 에이전트 상태는
          이해가 쉽지만 환경 상태는 이해하기 어렵다. 의사결정에는 영향을 주지만
          에이전트 값을 알 수 없다.... 이는 내부 구조에서 일어나는일이
          결과적으로 영향을 주지만 내부 구조를 이해하지 못하고 결과만을 보기에
          의사결정에 영향을 주지만 에이전트 값을 알 수 없다라고 하는 것이다.
          <br />
          <br />
          <h2>마르코프 상태(Markov state)</h2>
          &emsp;&emsp;강화학습 학습에서 문제를 풀때 에이전트가 속할 수 있는
          상태(state)를 미리 정의해야한다. 하지만 실제 강화학습에서 상태의
          개수가 너무 많기에 몇개의 변수를 조합해 상태를 정의한다. 이 변수는
          에이전트가 관찰할 수 있고 행동에 영향을 줄 수 있는 모든 변수, 행동,
          보상 등이 포함된다.
          <br />
          <br />
          &emsp;&emsp;마르코프 상태는 s<a style={{ fontSize: "12x" }}>t+1</a>을
          결정 할때 t, t-1.....0에서의 s가 아닌 오진 s
          <a style={{ fontSize: "12x" }}>t</a>에 의해서 결정될 때 마르코프
          상태라고 한다.
          <br />
          <div style={{ margin: "1em 0em 1em 3em" }}>
            <img style={{ width: "25em" }} src={Pic1_2}></img>
          </div>
          &emsp;&emsp;위 식이 MDB(상태를 정확히 알 수 있는) 상태에서의 마르코프
          상태의 정의이다. 마르코프 상태이면 더이상 이력(history)를 포함할 필요
          없이 현재 상태의 값만 의존한다. 따라서 강화학습에서 상태를 정의 할 때
          마르코프 상태의 특징을 가지도록 정의하는 경우가 효율적이다.
          <br />
          <br />
          <h2>행동(action)</h2>
          &emsp;&emsp;에이전트는 학습을 할때 항상 환경과 상호작용한다.
          강화학습에서 행동을 미리 정해지는 경우가 존재하는데 미리 정해진
          종류(정수)에서 한개를 선택해 수행하는 경우
          <strong className="blue_strong">
            유한종류 행동(finite number of actions)
          </strong>
          , 연속된 숫자의 값(실수)에서 한개의 행동을 하는 경우
          <strong className="blue_strong">
            무한종류 행동(infinite number of actions)
          </strong>
          라고 한다.
          <br />
          <br />
          <h2>정책(policy)</h2>
          &emsp;&emsp;에이전트가 미리 정해진 법칙에 의해 행동 하는 것을
          정책(policy)이라고 한다. 정책은 에이전트가 주어진 상태에서 어떤 행동을
          할지 결정해 준다. 이는 사용자에 의해 미리 주어질 수 도 있고,
          에이전트가 학습을 통해 생성할 수 도 있다. 정책은 π(a|s) 혹은 π(a,s)로
          표기되며, s는 상태, a는 행동을 수행할 확률을 의미한다. 결정적 정책은 a
          = π(s) 혹은 1= π(a|s)로 표현하고, 확률적 정책은 π(a|s) = P[a|s]로
          표현한다.
          <br />
          <br />
          &emsp;&emsp;아래는 정책 테이블이다.
          <br />
          <a
            style={{ margin: "1em 0em 1em 3em" }}
            href="https://www.baeldung.com/cs/epsilon-greedy-q-learning"
          >
            <img style={{ width: "30em" }} src={Pic1_3}></img>
            <br />
            https://www.baeldung.com/cs/epsilon-greedy-q-learning
          </a>
          <br />
          <br />
          &emsp;&emsp;그리고 이 정책을 신경망적으로 표현한 것을{" "}
          <strong> 정책 네트워크(policy network)</strong> 라고 표현한다.
          <br />
          <br />
          <a
            style={{ margin: "1em 0em 1em 3em" }}
            href="https://abhishm.github.io/Policy-Gradient-with-RNN/"
          >
            <img style={{ width: "30em" }} src={Pic1_4}></img>
            <br />
            https://abhishm.github.io/Policy-Gradient-with-RNN/
          </a>
          <br />
          <br />
          <h2>가치값(value function)</h2>
          &emsp;&emsp;가치값은 특정한 상태(state) 혹은 행동(action)이 얼마나
          좋은 상태인지 수치로 표기한 값이다. 가치값은 상태
          <strong>가치값(state value function</strong>)과
          <strong>행동 가치값(action value function)</strong> 두 종류가 있다.
          상태 가치 값은 Vπ(s)로 표기하며 이는 에이전트가 특정한 정책 π를
          따르며, 선택할때 상태 s 가 얼만큼 좋은 가치값을 가지는지를 의미한다.
          행동 가치값인 Qπ(s) 역시 비슷하게 동일하게 이해 하면 된다.
          <br />
          <br />
          &emsp;&emsp;Vπ, Qπ는 아래와 같은 식으로 표현 된다. 그리고 Qπ는
          행동에대한 가치값이다.
          <a
            style={{ margin: "1em 0em 1em 3em" }}
            href="https://www.youtube.com/watch?v=lI8_p7Qeuto"
          >
            <img
              style={{ width: "30em" }}
              src={Pic1_5}
              alt="reinforce eq"
            ></img>
            <br />
            https://www.youtube.com/watch?v=lI8_p7Qeuto
          </a>
          <br />
          <br />
          &emsp;&emsp;또 다른 방법으로 가치값을 함수로 표현 하는 방법은
          <strong> 가치값 근사함수방법(value function approximation)</strong>
          이다. 가치 값을 근사함수로 표현하는 경우 특정한 상태 가치값을 직접 알
          수 없으며, 근사함수의 출력값으로 가치값이 계산된다. 다시 말해 특정
          상태 s에 대한 상태값을 구하기 위해 신경망 함수에 넣어 계산한다. 따라서
          상태값을 직접 수정하는 것은 불가능하고, 신경망 함수 내부의 파라미터
          값을 수정하여 간접적으로 가치값을 수정해야한다.
          <br />
          <br />
          &emsp;&emsp;가치값 중 특정 정책에 관계없이 해당 상태나 행동에서 획득할
          수 이쓴 최대의 가치값을&ensp;
          <strong>최적 가치값(optimal value function)</strong>이라고 한다.
          그리고 최적 가치값의 종류에는&ensp;
          <strong>최적 상태가치값(optimal state value function)</strong>과&ensp;
          <strong>최적 행동가치값(optimal action value function)</strong>이
          있다. 최적 상태가치값의 경우 정책에 관계없이 에이전트가 현재의
          상태에서 앞으로 얻을 수 있는 최대의 상태가치값을 의한다. 최적
          행동가치값의 경우 정책에 관계없이 에이전트가 현재의 상태에서 어떤
          행동을 했을 때 앞으로 얻을 수 있는 최대의 행동 가치값을 의미한다.
          <br />
          <br />
          &emsp;&emsp; 좌측이 최적상태가치값이고, 우측이 최적행동가치값이다.
          <br />
          <a style={{ margin: "1em 0em 1em 3em" }}>
            <img
              style={{ width: "40em" }}
              src={Pic1_6}
              alt="reinforce eq"
            ></img>
            <br />
            <br />
          </a>
          <div className="center_strong_div">
            <strong className="red_strong" style={{ textAlign: "middle" }}>
              강화학습의 목표는 특정 상태에서 미래의 보상값 합을 최대화 하는
              행동을 선택하게 하는 것이므로, 최적 가치값을 생성하도록 하는
              행동을 하는 것이 강화학습의 목표이다.
            </strong>
          </div>
          <br />
          &emsp;&emsp;우리가 만약 어떤 정책이 있고 그 정책에 따라 행동을 하는
          것이 항 상 최적 가치값을 생성하게 되는 정책이라면 그 정책은 최적
          정책(optimal policy)라고 한다.
          <br />
          <br />
          <h2>모델(model)</h2>
          &emsp;&emsp;에이전트는 환경에 속해 있으며, 정책에 따라서 행동을 한다.
          환경은 에이전트의 행동에 따라 보상을 생성하며, 이후 에이전트가 다른
          상태에 놓이게 한다. 이와 같은 환경은 에이전트이 행동과 학습에 많은
          영향을 미친다. 하지만 많은 경우 에이전트는 환경의 전체 정보를 알 수
          없다. 그리고 에이전트가 획득 가능한 정보를 이용해 환경을 표현한 것을
          모델이라고 한다.
          <br />
          <br />
          &emsp;&emsp;모델은 환경에서 에이전트의 행동에 영향을 주는 부분만을
          표현한다. 모델은 에이전트가 행동했을때 <strong>보상(reward)</strong>을
          생성한고, 에이전트 <strong>상태전의(transition)</strong>를 결정한다.
          <br />
          <br />
          &emsp;&emsp;상태전이에는{" "}
          <strong>결정적 전이(deterministic transition)</strong>와{" "}
          <strong>확률적 전이(probabilis)</strong>가 존재한다. 이들은 상태
          전이를 확률 분포로 표현하게 된다. 확률적 전이의 경우는 에이전트가 특정
          상태 s에서 행동 a를 하면 에이전트의 다음상태 s'은 전이 확률 Pass' 에
          따라서 결정된다. 반면 결정적 전이의 경우는 가능한 행동 중 한개의
          행동에 대한 확률만 1로 하고 나머지를 0으로 표기한다.
          <br />
          <br />
          <a style={{ margin: "1em 0em 1em 5em" }}>
            <img
              style={{ width: "30em" }}
              src={Pic1_7}
              alt="reinforce eq"
            ></img>
          </a>
          <br />
          <p style={{ fontSize: "13px" }}>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;정확히
            deterministic/probabilistic transition을 표현한 그림은 아니지만 위
            그림과 같이 절차가 이루어진다.
          </p>
          <br />
          <h2>모델기반(model-based) 모델프리(model-free)</h2>
          &emsp;&emsp;에이전트가 현재 상태에서 어떤 행동을 하게 되면 환경은 전이
          확률에 따라 에이전트 상태를 다음 상태로 미리 전이하고 보상을 생성한다.
          이때 모델에 대한 전이 확률과 보상값에 대한 내용을 미리 알고 있다면
          모델기반 학습, 전이확률과 보상값에 대한 내용을 모르며 수행하는 학습은
          모델프리 학습이라고 한다. 이때 전이 확률과 보상값을 환경의 다이내믹
          변수(dynamic variable)이라고 한다. 보통 강화학습에서 다이내믹 변수를
          미리 알 수 있는 경우는 많지 않기에&nbsp;
          <strong className="red_strong" style={{ fontSize: "24px" }}>
            모델기반 학습은 두가지 의미로 사용된다.
            <br />
            <br />
            1) 다이내믹 변수값을 알면서 학습
            <br />
            2) 환경의 다이내믹 변수를 예측하면서 학습. 따라서 문맥에 따라서 모델
            기반 학습이 어떤 의미로 말을 하고 있는지 추측을 해야한다.
          </strong>
          <br />
          <br />
          &emsp;&emsp;하지만 대부분 강화학습을 할 때 방대한 양을 기반으로 학습을
          하기에 다이내믹 변수를 알거나 예측하기는 매우 어렵다. 이를 알기
          위해서는 환경의 파라미터를 알고 있어야하기에 대부분의 상황은 모델프리
          학습 문제이다.
          <br />
          <br />
          <h2>탐험(exploration)과 이용(exploitation)</h2>
          &emsp;&emsp;강화학습은 행동을 수행하며 환경으로부터 받은 피드백 값을
          학습에 이용한다. 이때 어떠한 정책에 대해 이 정책이 좋은 정책이니
          아닌지 알기 위해{" "}
          <strong className="red_strong" style={{ fontSize: "24px" }}>
            실제 행동을 수행하고 최적 상태가치값 혹은 최적 행동가치값을
            계산해야한다. 이 과정을 이용이라고 한다.
          </strong>
          <br />
          <br />
          &emsp;&emsp; 하지만 에이전트가 특정한 정책을 반복적으로 행동하게
          된다면 새로운 정책을 찾을 수 없게된다. 그렇다면 더 좋은 정책을 찾을 수
          있는 기회를 놓질 수 있고 이를 찾기 위해{" "}
          <strong className="red_strong" style={{ fontSize: "24px" }}>
            가끔 씩 다른 행동을 시도하는 것을 탐험이라고 한다.
          </strong>
          <br />
          <br />
          &emsp;&emsp; 따라서 강화학습은 이용과 탐험 모두 필요하며 이들의 적절한
          균형을 유지해 학습을 해야한다.
          <br />
          <br />
          <h2>예측(prediction)과 컨트롤(control)</h2>
          &emsp;&emsp;예측은 위에 서 계속 이야기했던 정책에 대한 성능평가를 하는
          과정이다. 따라서 특정한 정책에 대한 상태 가치값 혹은 행동 가치값을
          계산하는 과정이라는 것이다. 컨트롤은 최적의 정책을 찾는 과정을 말한다.
        </p>
      </div>
    </>
  );
}

export default ReinforceCh1;
