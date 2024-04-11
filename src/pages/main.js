import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./main.css";

function Main() {
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Main</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Main;
