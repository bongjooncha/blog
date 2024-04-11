import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// 이미지
import rein_book from "../img/study/rein/rein_book.png";

function Study() {
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={rein_book} />
        <Card.Body>
          <Card.Title>강화학습</Card.Title>
          <Card.Text>심층강화학습을 토대로 공부한 글입니다</Card.Text>
          <Link to="/study/강화학습">
            <Button variant="primary">글 읽기</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Study;
