import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import gram9 from "../../../img/project/9gram/9gram.JPG";

function Gram9_Card() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={gram9} />
        <Card.Body>
          <Card.Title>Gram9</Card.Title>
          <Card.Text>
            이미지 분류 인공지능 및 GPT API를 활용한 식단 분석/추천 서비스
          </Card.Text>
          <Link to="/project/9gram">
            <Button variant="primary">프로젝트 보기</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Gram9_Card;
