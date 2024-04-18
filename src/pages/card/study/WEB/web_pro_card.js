import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// 이미지
import webpro from "../../../../img/study/web/back/webpro/webpro.png";

function WebProCard() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={webpro} style={{ height: "19em" }} />
        <Card.Body>
          <Card.Title>웹 프로토콜</Card.Title>
          <Card.Text>웹 프로토콜의 종류 및 특징을 정리한 글</Card.Text>
          <Link to="/study/web_protocal">
            <Button variant="primary">글 읽기</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default WebProCard;
