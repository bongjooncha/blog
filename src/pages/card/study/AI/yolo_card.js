import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// 이미지
import yolov8 from "../../../../img/study/yolo/yolov8.JPG";

function Yolo() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={yolov8} style={{ width: "18em" }} />
        <Card.Body>
          <Card.Title>Yolo v8</Card.Title>
          <Card.Text>Yolo v8의 파라미터를 정리한 글</Card.Text>
          <Link to="/study/yolov8">
            <Button variant="primary">글 읽기</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Yolo;
