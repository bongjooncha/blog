import { React } from "react";
import StudySidenav from "components/layout/Nav/study/StudySideNav";

function WebPro() {
  return (
    <>
      <StudySidenav />
      <div className="main_con">
        <div className="contents">
          <h1 id="param">
            웹 통신 방법(AJAX, websocket, SSE, Long/Short Polling)
          </h1>
          <br />
          <br />
          <p className="contents">
            &emsp;&emsp; 우리가 인터넷을 사용할 때 대부분의 경우 서버와
            클라이언트가 함께 통신을 한다. 이때 통신을 하는데 있어서 다양한
            방식이 있으며 방식들 중 AJAX, websocket, SSE, Long Polling, WebRTC에
            대해서 알아보자.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 id="ajax">AJAX(Asynchronous Javascripts And XML)</h2>
            &emsp;&emsp; AJAX는 자바스크립트를 통해서 서버와 클라이언트가 비동기
            방식으로 데이터를 교환하는 기술이다. 원래 서버는 클라이언트가 코드를
            요구할때 마다 모든 리소스를 응답하는 Full Page Refresh 방식을
            사용했다. 이를 해결하기 위해 비동기적으로 xml 혹은 json과 같은
            데이터 만을 주고 받아 리소스를 아끼는 방식을 사용하는 것이 AJAX이다.
            <br />
            <br />
            &emsp;&emsp; 이러한 AJAX의 단점은 비동기적으로 데이터를 주고 받기
            때문에 클라이언트에서 연속된 데이터를 요청하게 되면 서버의 부하량이
            증가되고, 히스토리 관리가 안되며, 디버깅이 용이하지 않다는 점이
            있다. 또한 AJAX는 모든 브라우저에서 지원되는 것이 아니라고 한다.
            그리고 개인적으로 가장 신경써야 하는 단점이라고 생각하는 것은
            데이터를 통해서 통신을 하다보니 공격자가 데이터를 변조하거나
            탈취하기가 더 쉬워진다.
            <br />
            <br />
            &emsp;&emsp; Websocket Websocket은 양방향 통신 채널을 위해서
            사용되는 프로토콜이다. AJAX, websocket, SSE, Long Polling, WebRTC 중
            유일한게 http 통신 프로토콜을 사용하지 않으며, 서버와 클라이언트가
            서로 실시간 메시지를 교환하는데 사용된다. 웹 소켓 역시 http와
            동일하게 OSI 7계층에서 7계층에 해당되는 어플리케이션 계층에서
            동작하고 http와 다른 통신 프로토콜이지만 동일한게 80번 포트를
            일반적으로 사용한다.
            <br />
            <br />
            &emsp;&emsp; 웹소켓의 경우는 양방향 통신이기에 http 기반
            프로토콜들과 다르게 클라이언트가 서버에게 직접 통신을 줄 수 있다.
            이는 데이터를 지연 없이 바로 전송할 수 있기에, 채팅, 주식 시세, 게임
            등 실시간 통신이 필요한 웹 어플리케이션에 적합하다.
            <br />
            <br />
            &emsp;&emsp; 웹소켓의 단점은 연결을 유지한 상태로 계속 데이터를 주고
            받아야 하기에 클라이언트가 접속해 있다면 계속 접속해 있어야 하기에
            http기반의 서버보다 더 많은 리소스를 필요로 한다. 그럼에도 웹소켓은
            http보다 더 효율적인 통신 방식이기에 동일한 데이터를 전송하는 경우
            http보다 적은 리소스를 사용한다. 이 이유는 http는 정보를 전송할시
            header가 필요로 한데, Websocket은 header와 함께 정보를 보낼 필요가
            없기 때문이다.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 id="sse">SSE(Server-Sent Events)</h2>
            &emsp;&emsp; SSE는 서버에서 클라이언트로 실시간으로 데이터를 보내는
            기술이다. SSE는 Web socket과 결과론 적으로 유사한 면을 가지고 있지만
            http를 기반으로 하기에 확실한 차이가 존재를 한다. 우선
            http프로토콜이다 보니 서버에서 클라이언트로의 단방향 통신만이 존재를
            한다. 그리고 Websocket의 경우는 이진 데이터, 텍스트 데이터 모두
            전송을 하지만 SSE는 AJAX와 마찬가지로 서버에서 클라이언트로 보낼 때
            텍스트, JSON, XML을 사용한다. 연결 방식에도 차이가 존재를 한다.
            WebSocket은 클라이언트와 서버사이의 연결이 통신을 주고받는 한개의
            통로라고 설명 할 수 있을 것 같다. 하지만 SSE는 단방향 통신이기
            때문에 서버가 지속적으로 클라이언트에게 신호를 보내는 것이다. 이는
            클라이언트가 다른 페이지로 가거나 페이지를 닫을 때 까지 지속되며
            만일 도중에 끊어지면 설정한 횟수와 기간동안 지속해서 재연결을
            시도한다.
            <br />
            <br />
            &emsp;&emsp;SSE의 단점은 다양하지만 개인적으로 가장 크게 느껴지는
            중요하다고 생각되는 것은 SSE는 HTTP/1.1의 제약이 있다는 것이다.
            HTTP/1.1은 클라이언트와 서버가 한개의 연결만 가능하다는 것이다.
            따라서 여러개의 sse 통신을 사용자에게 제공하기 위해서는 서버가 더
            있어야 한다는 것이다.... 하지만 이러한 제약 사항은 HTTP2나 HTTP3에서
            해결되었다고 한다.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 id="polling">Long/Short Polling</h2>
            &emsp;&emsp; Long polling, short polling에 대해서 이야기 하기 이전
            우선 polling에 대해서 이야기 해보자. 우선 Polling은 두 시스템 간의
            상태를 주기적으로 확인하거나 업데이트를 감지하기 위해서 반복적으로
            데이터나 정보를 확인하는 작업을 의미한다. 따라서 Long polling, short
            polling 모두 상태를 업데이트 하는 방식인 것이다.
            <br />
            <br />
            &emsp;&emsp;우선 Long Polling은 클라이언트가 서버에 요청을 보내고,
            서버는 새로운 데이터가 발생할 때 까지 응답을 기달리는 것이다. 새로운
            데이터가 발생하면 서버는 즉시 응답을 반환하고, 클라이언트는 다시
            요청을 보네게 된다. 이를 위해서 클라이언트가 서버에 계속해서 연결을
            유지하고 있어야 하다. 따라서 서버 리소스는 자연스럽게 많이 사용하게
            된다.
            <br />
            <br />
            &emsp;&emsp;반면 Short Polling은 클라이언트가 일정한 간격으로 서버에
            요청을 보내고, 서버는 즉시 응답을 하는 것이다. 따라서 Long Polling과
            다르게 서버와 계속 연결을 할고 있을 필요는 없지만 변경사항이 없는
            경우에도 일정 간격으로 요청이 오고 가기 때문에 불필요한 트래픽이
            생긴다.
            <br />
            <br />
            &emsp;&emsp;Long/Short Polling 모두 Websocket과 SSE를 통해서 대체를
            할 수 있으며, Websocket과 SSE이 Long/short polling 보다 이점이
            많기에 잘 사용하지는 않는다고 한다.
          </p>
        </div>
      </div>
    </>
  );
}

export default WebPro;
