import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Project() {
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>project</Card.Title>
          <Card.Text>dfdfdfdfd</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Project;
