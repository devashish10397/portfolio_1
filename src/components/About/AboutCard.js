import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Type1 from "./Type1";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Devashish Ubale </span>
            from <span className="purple"> Pittsburgh, PA.</span>
            <div style={{ padding: 20, textAlign: "Left",fontSize:14 }}>
                <Type1 />
              </div>
            <br />I am a Software Engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. I am also a quick learner and a team player with a strong work ethic.
 
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing FiFA 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime and Movies 🍿
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling 🏖️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A person who has given up all desires for sense gratification, 
            who lives free from desires, who has given up all sense of proprietorship 
            and is devoid of false ego – he alone can attain real peace."{" "}
          </p>
          <footer className="blockquote-footer">Bhagavad Gita</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
