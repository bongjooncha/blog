import { React } from "react";

function ReinforceCh2() {
  return (
    <>
      <div className="main_con">
        <h1 id="ch2">Ch2. 마르코프 결정 프로세스</h1>
        <p className="top_ref">
          본 글은 "심층강화학습"을 토대로 작성된 글이다.
        </p>
        <br />
        <br />
        <br />
        <p className="contents">
          <h2>마르코프 모델</h2>
          &emsp;&emsp;CH1에서 마르코프 상태는 상태 st+1을 결정 할때 오직 st에
          의해 결정되는 것이다. 그리고 마르코프 모델은 시간에 따라 변화하는
          시스템을 수학적으로 표현한 모델이다. 따라서 마르코프 모델은 다음
          단게의 상태를 오직 현재 상태에 의해서 결정하고, 시스템의 상태와
          이들간의 전이와 전이 확률을 수학적으로 계산하는 모델이라고 볼 수 있다.
          <br />
          <br />
          &emsp;&emsp;마르코프 모델은 4가지 종류가 있다. 마르코프 체인, 은닉
          마르코프 모델, 마르코프 결정 프로세스, 부분관측 마르코프 결정
          프로세서이다.
          <br />
          <br />
          <h2>마르코프 체인(Markov property, MC)</h2>
          &emsp;&emsp;마르코프 체인은 유한한 수의 상태가 있고 이들 간의 전이는
          전이확률에 따라서 확률적으로 시행되는 수학적 모델이다. 마르코프 체인은
          행동을 포함하지 않는다.
          <br />
          마르코프 체인은 모든 상태들 간의 전이 확률을 메트릭스로 표현할 수 있고
          상태전이 매트릭스라고 한다.
          <br />
          <br />
          https://towardsdatascience.com/markov-chain-analysis-and-simulation-using-python-4507cee0b06e
          https://www.researchgate.net/figure/Structure-of-State-transition-matrix-P-and-corresponding-reward-matrix-R-for-m-system_fig3_329749301
          <br />
          <br />
          <h2>마르코프 보상 프로세스 (Markov reward process, MRP)</h2>
          &emsp;&emsp;마르코프 체인의 확장형으로 마르코프 결정 프로세스가 이전
          단게인 마르코프 보상 프로세스는 마르코프 체인의 보상을 추가한
          모델이다. 마르코프 체인은 {"<S,P>"}로 이루어져 있다. S는 State의 집합,
          P는 상태전이 매트릭스이다. 그리고 마르코프 보상에는 {"<R, γ>"}가
          추가된다. R은 보상함수, γ은 할인상수이다.
          <br />
          <br />
          &emsp;&emsp;위에서 마르코프 체인은 오직 확률과 상태만을 나타냈지만
          마르코프 보상에는 R인 리워드가 주어진다. 그리고 보상의 합을 구할때
          할인상수와 R이 계산된다.
          <br />
          &emsp;&emsp;마르코프 체인은 모든 상태들 간의 전이 확률을 메트릭스로
          표현할 수 있고 상태전이 매트릭스라고 한다.
          <br />
          <br />
          https://towardsdatascience.com/introduction-to-reinforcement-learning-markov-decision-process-44c533ebf8da
          <br />
          <br />
          &emsp;&emsp;상태 가치값은 1장에서 말했듯이 특정한 정책을 선택했을때
          상태가 얼마나 좋은 결과값으로 표현한 값이다. MRP 모델에서도
          상태가치값이 존재하는데, MRP 모델의 경우 행동을 포함하지 않기 때문에
          정책을 얻을 수 없다. 또한 행동을 고려할 수 없기에 행동가치값은 아에
          가질 수 없다.
          <strong>
            따라서 MRP 모델은 정책과 관게없이 전이 확률에 따라서 발생하는
            리턴값(Gt)을 구하고 이 평균을 상태 가치값이라고 한다.
          </strong>
          <br />
          <strong className="red_strong">
            &emsp;&emsp;상태 s에 대한 가치값은 종료상태까지 발생하는 여러
            경로들의 각각의 리턴의 평균값을 구해 이를 MRP 모델의
            상태가치값이라고 한다는 것이다.(따라서 모델은 유한 경계에 있어야
            한다.)
          </strong>
          <br />
          <br />
          <h2>벨만 방정식(Bellman equation)</h2>
          &emsp;&emsp; MRP 모델의 상태가치값을 구하는 방법은 항상 종료상태까지
          진행한 후 리턴값을 이용해 계산을 한다. 이는 종료 상태까지 진행된 이후
          계산을 할 수 있기에 비효율적이다. 이를 해결하기 위한 개념이
          벨만방정식이다. 벨만방정식은 가치값을 계산할 때 가치값을 측각적인
          보상값 다음 단계의 가치값으로 분활해 계산하고, 상태가치값 혹은
          행동가치값 간의 관계를 재귀적으로 표현한다. MRP 모델의 벨만 방정식은
          아래와 같다.
          https://stats.stackexchange.com/questions/243384/deriving-bellmans-equation-in-reinforcement-learning
          <br />
          <br />
          &emsp;&emsp;벨만 방정식은 강태 가치값을 또다른 상태가치값으로 표현한
          재귀방정식의 형태를 따른다. 따라서 벨만방정식은 가치값을 구하기 위해서
          종료상태까지 갈 필요 없이 즉각적으로 가치값을 구할 수 있다는 장점이
          있다.
          <br />
          <br />
          <h2>마르코프 결정 프로세스(Markov decision process, MDP)</h2>
          &emsp;&emsp;강화학습에서 가장 많이 사용 되는 모델은 MDP 모델이다. MDP
          모델과 MRP 모델의 차이점은 MDP 모델에서는 행동이 추가가 된다는 것이다.
          따라서 MRP 모델에서 사용되었던 4가지 변수
          {" <S, P, R, γ>"}에 행동 집합인 A가 추가가 되어 5가지 변수를 사용한다.
          <br />
          <br />
          https://en.wikipedia.org/wiki/Markov_decision_process <br />
          <br />
          &emsp;&emsp;따라서 MRP에서 존재하지 않았던 행동을 계산함해야 해
          보상값이 상태가 아닌 행동에 의해서 결정된다. 근데 만일 행동을
          선택하는데 결정을 하는 정책이 결정이 되어 있다면, MDP 모델은 상태만을
          확인하면 되기 때문에 마르코프 체인모델인 MC의 특징을 가지고, 상태의
          변화와 보상값까지 확인하게 되면 MRP 모델의 특징을 가지게 된다. 하지만
          MDP 모델을 사용할때 S에서 S'로 넘어가는 과정에 정책 π에 따라 행동 a를
          수행된다는 점은 MRP와 확실히 다른 점이다.
          <br />
          <br />
          <h2>벨만 기대/최적방정식(Bellman expectation/optimality equation)</h2>
          &emsp;&emsp;MDP 모델에서 정책 π이 정해졌을때 상태가치값은 상태와
          정책에 따라 선택될 수 있는 행동들을 모두 알 수 있고, 이 리턴값의
          평균을 구한것을 상태가치값 이라고 한다. 그리고 상태 s에서 행동 a를
          수행한 후 정책 π에 따라 진행할때 획득할 수 있는 리턴값들의 평균을
          행동가치값 이라고 한다. MDB 모델의 벨만 방정식에는 벨만 기대방정식과,
          벨만 최적방적식이 있다. 벨만 기대방정식은 주어진 정책에서 가치값들의
          관계만을 보여주고, ​​벨만 최적방정식은 정책과 관계없이 최적의
          가치값들의 관계를 보여준다. 다시 말해, 벨만 기대방정식은 주어진 정책에
          따라 행동을 하며 가치값들의 관계를 보여주고, 벨만 최적방정식은 최적의
          정책을 수행할 때의 가치값들의 상호관게를 보여주는 식이다. ​
          <br />
          <br />
          https://ai-sinq.tistory.com/entry/Bellman-Equation%EB%B2%A8%EB%A7%8C-%EB%B0%A9%EC%A0%95%EC%8B%9D
          <br />
          <br />
          &emsp;&emsp;좌측은 벨만 기대 방정식이고 우측는 벨만 최적 방정식이다.
          둘을 보면 매우 유사해 보인다. 하지만 벨만 기대 방정식의 경우 정책 π가
          주어지기고 주어지는 가치값을 이용서 값을 구한다. 반면 벨만 최적
          방정식은 정책을 알 수 없기에 전이 확률을 계산하며 값을 계산하게 된다.
          그리고 벨만 최적방정식에서 나온 max()는 최적상태가치값을 나타내며 이는
          아래에서 이어서 설명한다.
          <br />
          <br />
          <h2>
            최적가치값 / 최정 정책(optimal state value function/optimal policy)
          </h2>
          &emsp;&emsp;MDP 모델에서 정책이 주어지는 특수한 경우가 아니라면
          최적방정식을 따른다. 최적방적식을 사용하기 위해서는 최적 가치값을
          알아야 한다.
          <br />
          <br />
          &emsp;&emsp;최적가치값은 특정 상태 s에 대한 최적 상태가치값을 v*(s) =
          max vπ(s)로 표현하는데, 상태 s에서 획득할 수 있는 최대 보상의 합을
          의미한다. 최적 행동 가치값은 q(s,a)를 위와 최적 상태 가치값처럼
          작성된것과 동일한다.
          <br />
          <br />
          &emsp;&emsp;최적 가치값들은 주어진 MDP 모델에서 에이전트가 최고의
          성능을 보일때의 가치값을 의미한다. 따라서 최적의 가치값을 구하면
          최적의 정책을 구할 수 있다. 아래는 최적의 정책을 구하기 위해 알아야
          하는 최적가치값을 구하는 식이다. 최적 가치값을 구하기 위해서는
          전이확률 P와 보상 R이 필요하다. 정확히 말하면 s에서 s'으로 넘어갈때
          P와 R이 필요하다.
          <br />
          <br />
          &emsp;&emsp; http://incompleteideas.net/book/3/node9.html
          <br />
          <br />
          &emsp;&emsp;만일 P 혹은 R값을 알지 못하는 모델프리의 상황이라면 이를
          사용할수 없으며, 이 경우는 최적 행동가치값을 이용해 최적정책을 구해야
          한다.
          <br />
          <br />
          &emsp;&emsp;강화학습의 목표는 최적의 정책을 구하는 것이다. 그리고 MDP
          모델에서의 최적 정책의 명제는 아래와 같다.
          <br />
          <br />
          &emsp;&emsp;1) 최소한 한개 이상의 결정적인 최적 정책이 존재
          <br />
          &emsp;&emsp;2) 여러개의 최적 정책이 존재하는 경우에도 이들의 최적
          가치값들은 동일
          <br />
          &emsp;&emsp;3) 최적 정책에 따라 생성되는 상태가치값은 항상 최적
          상태가치값과 같고, 행동 가치값도 최적 행동가치값과 같음.
          <br />
          <br />
          &emsp;&emsp;따라서 최적 행동 가치값 q*(s,a)를 구한다면, 최적 정책을
          구할 수 있다. 따라서 강화학습은 최적 행동가치값 q*(s,a)를 구하는
          것이라고 볼 수 있다.
          <br />
          <br />
          &emsp;&emsp;벨만 최적방정식은 최적 상태 가치값 간의 관게를 재귀적으로
          표현한다. 벨만 최적방정식은 최대화 연산을 포함하고 있고, 방정식이
          비선형이 되므로 메트릭스 연산을 할 수 없다. 따라서 벨만 최적 방정식은
          반복적인 방법을 사용해 최적 가치값을 구한다.
          <br />
          <br />
          <h2>
            부분관측 마르코프 결정 프로세서(partially observable Markov decsion
            process, POMDP)
          </h2>
          &emsp;&emsp; MDP 모델은 에이전트의 상태를 정확히 인지하고 있다고
          가정한다. 하지만 에이전트가 상태를 인지하지 못하는 경우가 생긴다. 이를
          부분 관측 마르코프 결정 프로세서라고 한다. POMDP는 에이전트가 현재
          정확히 상태를 알수 없는 특징을{" "}
          <strong className="strong">부분 관측성(partial obserbility)</strong>
          이라 한다.
          <br />
          <br />
          &emsp;&emsp;POMDP는 MDP와 다르게 관측을 하지 못하는 경우가 있기에
          상태값이 아닌 환경으로부터의 관측값(observation)을 변수로 가진다.
          POMDP는 현재 속해있는 상태를 확률분포로 계산하며 이 분포를 믿음
          상태(belief state)라고 한다.
        </p>
      </div>
    </>
  );
}

export default ReinforceCh2;
