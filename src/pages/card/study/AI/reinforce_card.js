import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// 이미지
import rein_book from "../../../../img/study/rein/rein_book.png";

function Rein_Card() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={rein_book} style={{ width: "16em" }} />
        <Card.Body>
          <Card.Title>심층강화학습</Card.Title>
          <Card.Text>책 심층강화학습을 정리한 글</Card.Text>
          <Link to="/study/심층강화학습">
            <Button variant="primary">글 읽기</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Rein_Card;
