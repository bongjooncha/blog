import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import data from "../card_name.json";

function CardItem({ title, text, link, imgSrc }) {
  // 줄바꿈 문자를 <br>로 변경
  const formattedText = text.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{formattedText}</Card.Text>
        <Link to={link}>
          <Button variant="primary">글 읽기</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

function Project() {
  const studyData = data.project;

  return (
    <>
      {Object.keys(studyData).map((key) => {
        const item = studyData[key];
        return (
          <CardItem
            key={key}
            title={item.Title}
            text={item.Text}
            link={item.Link}
            imgSrc={item.IMG}
          />
        );
      })}
    </>
  );
}

export default Project;
