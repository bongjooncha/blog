import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import Asset_Img from "../../../img/project/asset/asset.png";

function Asset() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={Asset_Img} />
        <Card.Body>
          <Card.Title>GPT 자산 평가</Card.Title>
          <Card.Text>
            투자 자산을 google spread sheet에서 확인하고, gpt를 통해 투자 자산
            안전성 평가 받는 프로그램
          </Card.Text>
          <Link to="/project/asset">
            <Button variant="primary">프로젝트 보기</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Asset;
