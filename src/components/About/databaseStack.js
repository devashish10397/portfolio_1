import React from "react";
import { Col, Row } from "react-bootstrap";
import {
<<<<<<< HEAD
  SiOracle,
=======
>>>>>>> main
  SiMysql,
} from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiRedis } from "react-icons/si";


function DatabaseStack() {
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={3} md={2} className="tech-icons">
        <h4>Mongodb</h4> <SiMongodb />
        </Col>
        <Col xs={3} md={2} className="tech-icons">
        <h4>SQL</h4> <SiMysql />
        </Col>
        <Col xs={3} md={2} className="tech-icons">
        <h4>Postgresql</h4> <DiPostgresql />
        </Col>
        <Col xs={3} md={1} className="tech-icons">
        <h4>Redis</h4><SiRedis />
        </Col>
        
      </Row>
    );
  }

  export default DatabaseStack;