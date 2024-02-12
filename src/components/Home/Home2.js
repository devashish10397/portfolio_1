import React from "react";
import { Container, Row, Col,  } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {AiFillMail,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="purple"> introduce </span> myself
            </h1>
            <p className="home-about-body">
              I am a experienced Software Engineer, Recently Completed Masters from Carnegie Mellon Univeristy🎓              <br />
              <br />I am well versed in
              <i>
                <b className="purple"> Python, Java, C, C++ and C#. </b>
              </i>
              <br />
              <br />
              <br />I have worked on a wide range of projects and have worked at TIBCO Software, Nvidia, CASOS - CMU.
              <br />
              <br />
              My field of Interest are &nbsp;
              <i>
                <b className="purple">Software Development, Backend Development, Full-Stack Development, DevOps</b> and have
                 keen interest in{" "}
                <b className="purple">
                  Machine Learning, Front End Development, Information Security       
                </b>
                  <i> and</i> 
                <b className="purple"> Cloud Computing.</b>
                
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Python, Java and </b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Python and Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:devashishubale10@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/devis10/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/devashishubale/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dev_leetcode_journey/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
