import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
<<<<<<< HEAD
  
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
=======
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
>>>>>>> main
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Devashish</h3>
        </Col>
        <Col md="4" className="footer-copywright">
<<<<<<< HEAD
          <h3>Copyright © {year} SG</h3>
=======
          <h3>tm © {year} DEV</h3>
>>>>>>> main
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {<li className="social-icons">
              <a
<<<<<<< HEAD
                href="https://github.com/devashish103"
=======
                href="https://github.com/devashish10397"
>>>>>>> main
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            }
            <li className="social-icons">
              <a
                href="mailto:devashishuable10@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li> 
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/devashishubale/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {<li className="social-icons">
              <a
                href="https://www.instagram.com/dev_leetcode_journey/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram/>
              </a>
            </li>}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
