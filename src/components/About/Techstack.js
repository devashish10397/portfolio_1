import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { TbBrandCSharp } from "react-icons/tb";
import { SiSpring } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiPython,
} from "react-icons/di";
import {
  SiDataversioncontrol,
  SiNodedotjs,
  SiMysql,
  SiHtml5,
  SiFastapi
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJquery } from "react-icons/si";
import { FaJava } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={2} className="tech-icons">
      <h4>Java</h4><FaJava />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
      <h4>Python</h4><DiPython />
      </Col>
      {/* <div >C++</div> */}
      <Col xs={3} md={2} className="tech-icons">
      <h4>C/C++</h4><CgCPlusPlus />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
      <h4>Spring</h4><SiSpring />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
      <h4>JavaScript</h4> <IoLogoJavascript />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
      <h4>JQuery</h4> <SiJquery />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
      <h4>C#</h4><TbBrandCSharp />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
      <h4>NodeJS</h4> <SiNodedotjs />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
      <h4>HTML/CSS</h4><SiHtml5 />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
      <h4>React</h4> <DiReact />
      </Col>
    </Row>
  );
}

export default Techstack;
