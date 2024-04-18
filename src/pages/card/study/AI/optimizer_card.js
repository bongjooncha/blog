import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// 이미지
import optimizer from "../../../../img/study/optimizer/optimizer.png";

function Optimizer() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={optimizer} style={{ width: "100%" }} />
        <Card.Body>
          <Card.Title>Optimizer</Card.Title>
          <Card.Text>
            Optimizer의 종류 및 특징, 코드 구현 코드를 정리하 글
          </Card.Text>
          <Link to="/study/optimizer">
            <Button variant="primary">글 읽기</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Optimizer;
