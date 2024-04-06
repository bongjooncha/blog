import "./App.css";
import React from "react";
import Headnav from "./nav/headnav";
import Sidenav from "./nav/sidenav";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useLocation, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Headnav />
      <Sidenav />
    </div>
  );
}

export default App;
