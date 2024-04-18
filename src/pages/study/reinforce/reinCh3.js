import { React } from "react";

import Pic1_1 from "../../../img/study/rein/ch1/1_1.png";
import Pic1_2 from "../../../img/study/rein/ch1/1_2.png";
import Pic1_3 from "../../../img/study/rein/ch1/1_3.png";
import Pic1_4 from "../../../img/study/rein/ch1/1_4.png";
import Pic1_5 from "../../../img/study/rein/ch1/1_5.png";
import Pic1_6 from "../../../img/study/rein/ch1/1_6.png";
import Pic1_7 from "../../../img/study/rein/ch1/1_7.png";

function ReinforceCh3() {
  return (
    <>
      <div className="main_con">
        <h1 id="ch3">Ch3. 강화학습의 개요</h1>
        <p className="top_ref">
          본 글은 "심층강화학습"을 토대로 작성된 글이다.
        </p>
        <br />
        <br />
        <br />
        <p className="contents">
          <h2>동적 프로그래밍(dynamic programming)</h2>
          &emsp;&emsp; 우선 이 글에서 말하는 동적 프로그래밍은 강화학습 뿐만
          아니라 컴퓨터 프로그래밍 분야에서 전반적으로 사용되는 개념이다. 동적
          프로그래밍은 전체 문제를 작은 부분 문제로 분할하고 이들 부분 문제에
          대한 최적의 해를 구한 후에 이들의 결합을 통해 전체적인 최적의 해를
          구하는 방법이다. 일반적으로 동적 프로그래밍은 두 가지 조건을 만족해야
          적용가능 하다.
          <br />
          <br />
          &emsp;&emsp;1) 최적화의 법칙(principle of optimality): 최적의 해법은
          최적의 부분 들을 결합해 구할 수 있다.
          <br />
          &emsp;&emsp;2) 부분문제의 재사용: 부분문제는 여러 번 발생해 저장되며
          부분 문제의 계산된 결과를 재사용할 수 있다.
          <br />
          <br />
          &emsp;&emsp;최적화 법칙은 주어진 문제에서 최적 솔루션이 있다고
          가정하고, 어떠한 부분 문제도 최적 솔루션일 때 최적화의 법칙을 따른다고
          한다. 따라서 최적화의 법칙은 최적 부분구조 법칙으로도 불린다.
          <br />
          <br />
          &emsp;&emsp;동적 프로그래밍을 사용하기 위해서는 환경의 다이내믹에 대한
          값들을(전이확률 및 보상값)을 알아야 한다. 다시 말해 환경의 다이내믹
          값을 알고 있는 모델 기반 에서만 동적 프로그래밍을 사용할 수 있다.
          <br />
          <br />
          <h2>컨트롤(control)</h2>
          &emsp;&emsp; 컨트롤은 최적의 정책을 찾는 작업을 말한다. 강화 학습의
          주된 목표인 최적의 정책을 찾는 것이다. 최적의 정책을 찾기 위해
          컨트롤에서는 현재의 정책을 수정하여 새로운 정책을 생성한다. 이 과정을
          정책 향상(policy improvement)이라고 한다.
          <br />
          <br />
          &emsp;&emsp;특정 정책 π의 정책평가가 완료되면, 그 정책이 발생시키는
          결과를 가치값을 통해 알 수 있다. 그리고 기존 정책에서 새로운 정책을
          생성하는 과정을 정책 향상이라고 한다.
          <br />
          <br />
          &emsp;&emsp;정책 향상 방법 중 가장 흔하게 사용되는 탐욕
          정책향상(greedy policy improvement)은 정책을 향상 시킬때
          탐욕연산(greedy operation)을 사용한다. 탐욕 연산은 특정 상태 s에서
          선택할 수 있는 행동 중에서 행동가치값q(s,a)이 큰 a를 선택한다. 이를
          새로운 정책 π'를 생성한다.
          <br />
          <br />
          &emsp;&emsp;탐욕 연산은 기존 정책 π에서 구한 행동가치값 q(s,a)를
          이용해 새로운 정책 π'을 구한다. 그리고 q(s,a)일때 π의 값이 최대가 되는
          값은 정해져 있다고 볼 수 있기에, 이를 결정적 정책이라고 부른다. ​ s에
          대한 상태가치값과 행동 가치값에 대한 식은 아래와 같다. 그리고 위 식을
          통해 혼합하면 아래와 같다. 아래 식은 정책 π가 π'보다 좋은 정책임을
          증명하는 식이다.
          <br />
          <br />
          &emsp;&emsp;그리고 더이상 정책 수정의 변동이 없을때 그 정책은 최적의
          정책이라고 판단할 수 있는 것이다.
          <br />
          <br />
          <h2>정책/가치값 반복(policy/value iteration)</h2>
          &emsp;&emsp; 컨트롤에서 최적의 정책을 찾아가는 방법은 정책 반복과
          가치값 반복이 있다. ​ 정책반복(policy iteration)은 정책 평가와 정책
          향상을 번갈아 가면서 정책 혹은 가치값의 변화가 없을 때 까지 수행하는
          방법이다. ​ 정책평가(policy evaluation)는 상태 가치값 v(s)가 수렴 할때
          가지 지속해서 정책평가를 하는것을 말한다. 아래 식은 수렴된 경우인
          max를 나타내고 있다. 정책 향상(policy improvment)은 정책평가에서
          계산된 v(s)를 이용해 정책을 향상시킨다. 위 컨트롤을 설명할 때 사용한
          탐욕연산을 통해서 정책을 향상 시킨다. v(s)를 통해서 q(s,a)를 구하고
          이를 통해 새로운 정책 π'을 구하게 되는 것이다. ​ 위와 같이 값은 최적의
          정책과 상태가치값을 구할 수 있고, 이를 수정된 정책 반복(modified
          policy iteration)이라고 한다.
          <br />
          <br />
          &emsp;&emsp;
          <strong className="strong">가치값 반복(value iteration)</strong>
          <strong>
            은 오직 한 단계(상태가치값 계산)을 통해 정책향상을 수행하는 방법{" "}
          </strong>
          이다. 가치 반복은 탐욕연산과, 정책평가를 결합한 방법이다. 가치값
          반복은 한 단계를 통해서 정책향상을 한다고 했지만 그 한단계 안에
          탐욕연산을 반복적으로 실행하게 됨으로 반복된다고 볼 수 있다.
          <br />
          <br />
          <h2>동기백업/ 비동기 백업</h2>
          &emsp;&emsp; 동적 프로그래밍은 반복적으로 식을 수행하며, 한번 수행했을
          때 얻은 결과를 다음 번 식을 수행할 때 사용한다. 이{" "}
          <strong>
            결과값(vk)을 한번에 백업(저장)하는 것을 동기백업(synchronous backup)
          </strong>
          이라고 한다. 하지만 상태(vk)의 개수가 많을 경우 계산과 시간이 많이
          걸린다. 그리고 어떠한 상태(vk)는 자주 업데이트가 되지만 어떠한 상태는
          자주 업데이트가 되지 않는다. 따라서 전체를 한번에 백업하는 것은 매우
          비효율 적이다.
          <br />
          <br />
          &emsp;&emsp;이 때문에 전체 동기화를 한번에 하지 않고, 선택적으로
          저장하고 업데이트하는 것을{" "}
          <strong>비동기백업(asynchronous backup)</strong>이라고 한다. 이는 각
          가치값마다 다른 업데이트 주기를 사용해 계산 효율을 극대화 시킨다.
        </p>
      </div>
    </>
  );
}

export default ReinforceCh3;
