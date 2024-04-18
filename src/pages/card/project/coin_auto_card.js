import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import Coin from "../../../img/project/coin/coin.png";

function CoinAutoCard() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={Coin} />
        <Card.Body>
          <Card.Title>코인 자동 매매</Card.Title>
          <Card.Text>강화학습 및 지표를 통한 자동 매매 시스템</Card.Text>
          <Link to="/project/coin_auto">
            <Button variant="primary">프로젝트 보기</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default CoinAutoCard;
