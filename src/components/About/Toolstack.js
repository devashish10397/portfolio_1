import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiTensorflow
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiJenkins } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";

// ...


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={1} className="tech-icons">
        <h4>Linux</h4> <SiLinux />
      </Col>
      <Col xs={3} md={1} className="tech-icons">
        <h4>VS Code</h4> <SiVisualstudiocode />
      </Col>
      <Col xs={3} md={1} className="tech-icons">
        <h4>Jenkins</h4><SiJenkins/>
      </Col>
      <Col xs={3} md={1} className="tech-icons">
        <h4>Kubernetes</h4><SiKubernetes />
      </Col>
      <Col xs={3} md={1} className="tech-icons">
      <h4>AWS</h4><FaAws />
      </Col>
      <Col xs={3} md={1} className="tech-icons">
        <h4>GCP</h4><SiGooglecloud />
      </Col>
      <Col xs={3} md={1} className="tech-icons">
        <h4>TenserFlow</h4><SiTensorflow />
      </Col>
      <Col xs={3} md={1} className="tech-icons">
        <h4>Postman</h4><SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;