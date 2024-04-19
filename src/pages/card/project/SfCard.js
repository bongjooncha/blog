import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import SF from "../../../img/project/smartfarm/smartfarm.png";

function SF_Card() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={SF} />
        <Card.Body>
          <Card.Title>Smart Farm</Card.Title>
          <Card.Text>
            아두이노, 라즈베리 파이를 이용한 원격조작 스마트팜
          </Card.Text>
          <Link to="/project/smartfarm">
            <Button variant="primary">프로젝트 보기</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default SF_Card;
