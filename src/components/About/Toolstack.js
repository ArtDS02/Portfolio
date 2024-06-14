import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiAndroidstudio,
  SiIntellijidea,
  SiDocker
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <p style={{fontSize:"12px"}}>Android studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{fontSize:"12px"}}>VS code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{fontSize:"12px"}}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p style={{fontSize:"12px"}}>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <p style={{fontSize:"12px"}}>Intellij idea</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
