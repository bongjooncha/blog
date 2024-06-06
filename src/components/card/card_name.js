import optimizer from "assets/img/study/optimizer/optimizer_pic.gif";
import reinforce from "assets/img/study/rein/rein_book.png";

const cardData = {
  project: {
    Asset: {
      Title: "GPT 자산 평가",
      Text: "투자 자산을 google spread sheet에서 확인하고, gpt를 통해 투자 자산안전성 평가 받는 프로그램",
      Link: "/project/asset",
      IMG: "assets/img/project/asset/asset.png",
    },
    autoTrade: {
      Title: "자동매매",
      Text: "자동 매매 웹사이트",
      Link: "/project/coin_auto",
      IMG: "assets/img/project/coin/coin.png",
    },
    Gram9: {
      Title: "Gram9",
      Text: "이미지 분류 인공지능 및 GPT API를 활용한 식단 분석/추천 서비스",
      Link: "/project/9gram",
      IMG: "assets/img/project/9gram/9gram.JPG",
    },
    sfFarm: {
      Title: "Smart Farm",
      Text: "아두이노, 라즈베리 파이를 이용한 원격조작 스마트팜",
      Link: "/project/smartfarm",
      IMG: "assets/img/project//smartfarm/smartfarm.png",
    },
  },
  study: {
    AI: {
      Optimizer: {
        Title: "Optimizer",
        Text: "Optimizer의 종류 및 특징,\n 코드 구현",
        Link: "/study/optimizer",
        IMG: optimizer,
      },
      Reference: {
        Title: "심층강화학습",
        Text: "책 심층강화학습을 정리",
        Link: "/study/심층강화학습",
        IMG: reinforce,
      },
      Yolo: {
        Title: "Yolo v8 parm",
        Text: "Yolo v8의 파라미터",
        Link: "/study/yolov8",
        IMG: "assets/img/study/optimizer/optimizer_pic.gif",
      },
    },
    Web: {
      WebProtocall: {
        Title: "웹 프로토콜",
        Text: "웹 프로토콜의 종류 및 특징",
        Link: "/study/web_protocal",
        IMG: "assets/img/study/web/back/webpro/webpro.png",
      },
    },
  },
};

export default cardData;
