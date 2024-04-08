import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Study() {
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Study</Card.Title>
          <Card.Text>dfdfd</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Study;
