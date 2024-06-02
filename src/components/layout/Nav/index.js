import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TopDownButton from "../TopDownButton";

import "./nav.css";

import GitButton from "../img/else/github.png";
import NaverButton from "../img/else/naver.png";

function Headnav() {
  return (
    <>
      <Navbar expand="lg" className="top_nav">
        <Container>
          <Navbar.Brand className="main_tag" href="/blog">
            BJ's tech blog
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/blog">Home</Nav.Link>
              <Nav.Link href="/blog/#/project">Project</Nav.Link>
              <Nav.Link href="/blog/#/study">Study</Nav.Link>
            </Nav>
            <div className="head_right">
              <a href="https://github.com/bongjooncha">
                <img src={GitButton} />
              </a>
              <a href="https://blog.naver.com/bongjooncha">
                <img src={NaverButton} />
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <TopDownButton />
    </>
  );
}

export default Headnav;
